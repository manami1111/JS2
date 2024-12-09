import React from "react";
import axios from "axios";

function ExportButtons() {
  // Excelエクスポート処理
  const handleExportExcel = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products/export", {
        responseType: "blob",
      });

      // ステータスコードが200でない場合、エラーを表示
      if (response.status !== 200) {
        console.error(`Error: ${response.status}`);
        alert(`エクスポートに失敗しました。ステータスコード: ${response.status}`);
        return;
      }

      // Blobデータがエクスポートされるべき形式か確認
      if (response.data instanceof Blob) {
        // MIMEタイプを確認してExcelファイルかどうか確認
        const contentType = response.headers["content-type"];
        if (contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));
          link.download = "products.xlsx";
          link.click();
        } else {
          // 予期しないレスポンス（HTMLエラーページなど）の場合
          response.data.text().then(text => {
            console.log('Received HTML Response:', text);  // エラーページの内容を表示
            alert("エクスポートに失敗しました。エラーメッセージを確認してください。");
          });
        }
      }
    } catch (error) {
      if (error.response) {
        // サーバーから返されたエラーレスポンス
        console.log("Export failed with status:", error.response.status);
        console.log("Error details:", error.response.data);
      } else {
        // リクエスト自体が失敗した場合
        console.error("Excel export failed", error.message);
      }
    }
  };

  // CSVエクスポート処理
  const handleExportCsv = async () => {
    try {
      const response = await axios.get("/products/export-csv", {
        responseType: "blob", // ファイルとして受け取る
      });

      // ステータスコードが200でない場合、エラーを表示
      if (response.status !== 200) {
        console.error(`Error: ${response.status}`);
        alert(`エクスポートに失敗しました。ステータスコード: ${response.status}`);
        return;
      }

      // Blobデータがエクスポートされるべき形式か確認
      if (response.data instanceof Blob) {
        // MIMEタイプを確認してCSVファイルかどうか確認
        const contentType = response.headers["content-type"];
        if (contentType === "text/csv") {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));
          link.download = "products.csv"; // ダウンロードするファイル名
          link.click();
        } else {
          // 予期しないレスポンス（HTMLエラーページなど）の場合
          response.data.text().then(text => {
            console.log('Received HTML Response for CSV:', text);  // エラーページの内容を表示
            alert("エクスポートに失敗しました。エラーメッセージを確認してください。");
          });
        }
      }
    } catch (error) {
      console.error("CSV export failed:", error);
    }
  };

  return (
    <div>
      <button onClick={handleExportExcel}>Excelエクスポート</button>
      <button onClick={handleExportCsv}>CSVエクスポート</button>
    </div>
  );
}

export default ExportButtons;

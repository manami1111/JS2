import React from "react";
import axios from "axios";

function ExportButtons() {
  // Excelエクスポート処理
  const handleExportExcel = async () => {
    try {
      const response = await axios.get("/products/export", {
        responseType: "blob",
      });

      // ステータスコードが200でない場合、エラーを表示
      if (response.status !== 200) {
        console.error(`Error: ${response.status}`);
        alert(`エクスポートに失敗しました。ステータスコード: ${response.status}`);
        return;
      }

      // BlobデータがHTMLの場合（エラーページなど）
      if (response.data instanceof Blob) {
        response.data.text().then(text => {
          console.log('Received HTML Response:', text);  // エラーページの内容を表示
          alert("エクスポートに失敗しました。エラーメッセージを確認してください。");
        });
      }

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
      link.download = "products.xlsx";
      link.click();
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

      // BlobデータがHTMLの場合（エラーページなど）
      if (response.data instanceof Blob) {
        response.data.text().then(text => {
          console.log('Received HTML Response for CSV:', text);  // エラーページの内容を表示
          alert("エクスポートに失敗しました。エラーメッセージを確認してください。");
        });
      }

      // レスポンスからファイルをダウンロード
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([response.data], { type: 'text/csv' }));
      link.download = "products.csv"; // ダウンロードするファイル名
      link.click();
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

// ExportButtons.jsx
import React from "react";
import axios from "axios";

function ExportButtons() {
  // Excelエクスポート処理
  const handleExportExcel = async () => {
    try {
      const response = await axios.get("/api/products/export", {
        responseType: "blob",
      });

      // レスポンス全体を確認
      console.log(response);

      // MIMEタイプの確認（オプション）
      console.log(response.headers["content-type"]); // ここでMIMEタイプを確認

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
      const response = await axios.get("/api/products/export-csv", {
        responseType: "blob", // ファイルとして受け取る
      });

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
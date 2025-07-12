function ExportPDF({ medicines }) {
  const generateLaTeX = () => {
    let latex = `\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\\begin{document}\n\\section*{Medicine Log}\n\\begin{itemize}\n`;
    medicines.forEach(med => {
      latex += `\\item ${med.name}: ${med.dosage}, ${med.schedule.map(s => `${s.time} - ${s.dose}`).join(', ')}\n`;
    });
    latex += `\\end{itemize}\n\\end{document}`;
    console.log(latex); // Mock: Replace with LaTeX rendering service in production
    alert('LaTeX code generated. See console for details.');
  };

  return (
    <button
      onClick={generateLaTeX}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Export PDF
    </button>
  );
}

export default ExportPDF;
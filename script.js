// ===========================================
// 📅 Atualiza automaticamente o ano no rodapé
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();

  // IDs de elementos que receberão o ano atual
  const yearIds = ['year', 'year2', 'year3'];

  yearIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = currentYear;
    }
  });
});

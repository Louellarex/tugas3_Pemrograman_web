document.addEventListener('DOMContentLoaded', () => {
    const hitungButton = document.getElementById('hitungButton');
    const clearButton = document.getElementById('clearButton');
  
    hitungButton.addEventListener('click', () => {
      const presensi = parseFloat(document.getElementById('presensi').value) || 0;
      const tugas = parseFloat(document.getElementById('tugas').value) || 0;
      const uts = parseFloat(document.getElementById('uts').value) || 0;
      const uas = parseFloat(document.getElementById('uas').value) || 0;
  
      const nilaiAkhir = (presensi * 0.1) + (tugas * 0.2) + (uts * 0.3) + (uas * 0.4);
  
      let hurufMutu = '';
      if (nilaiAkhir > 80) hurufMutu = 'A';
      else if (nilaiAkhir > 75) hurufMutu = 'B+';
      else if (nilaiAkhir > 70) hurufMutu = 'B';
      else if (nilaiAkhir > 65) hurufMutu = 'B-';
      else if (nilaiAkhir > 60) hurufMutu = 'C+';
      else if (nilaiAkhir > 55) hurufMutu = 'C';
      else if (nilaiAkhir > 50) hurufMutu = 'C-';
      else if (nilaiAkhir > 30) hurufMutu = 'D';
      else hurufMutu = 'E';
  
      document.getElementById('nilaiPresensi').textContent = presensi;
      document.getElementById('nilaiTugas').textContent = tugas;
      document.getElementById('nilaiUTS').textContent = uts;
      document.getElementById('nilaiUAS').textContent = uas;
      document.getElementById('nilaiAkhir').textContent = nilaiAkhir.toFixed(2);
      document.getElementById('hurufMutu').textContent = hurufMutu;
    });
  
    clearButton.addEventListener('click', () => {
      document.getElementById('presensi').value = '';
      document.getElementById('tugas').value = '';
      document.getElementById('uts').value = '';
      document.getElementById('uas').value = '';
  
      document.getElementById('nilaiPresensi').textContent = '-';
      document.getElementById('nilaiTugas').textContent = '-';
      document.getElementById('nilaiUTS').textContent = '-';
      document.getElementById('nilaiUAS').textContent = '-';
      document.getElementById('nilaiAkhir').textContent = '-';
      document.getElementById('hurufMutu').textContent = '-';
    });
  });
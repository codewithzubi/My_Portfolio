
      function downloadResume() {
          const link = document.createElement('a');
          link.href = 'Picture/ZubairCv.pdf';
          link.download = 'My_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  
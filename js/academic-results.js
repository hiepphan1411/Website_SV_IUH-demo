document.addEventListener("DOMContentLoaded", function () {
  const gradeCtx = document.getElementById("gradeDistributionChart");
  if (gradeCtx) {
    new Chart(gradeCtx, {
      type: "bar",
      data: {
        labels: ["A+", "A", "B+", "B", "C+", "C", "D"],
        datasets: [
          {
            label: "Số môn",
            data: [4, 2, 1, 1, 0, 0, 0],
            backgroundColor: [
              "#0d904f",
              "#1a73e8",
              "#0d904f",
              "#1a73e8",
              "#e37400",
              "#ff9800",
              "#f44336",
            ],
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 12,
            titleFont: {
              size: 14,
              weight: "bold",
            },
            bodyFont: {
              size: 13,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  // GPA Trend Chart
  const gpaCtx = document.getElementById("gpaTrendChart");
  if (gpaCtx) {
    new Chart(gpaCtx, {
      type: "line",
      data: {
        labels: ["HK1/22", "HK2/22", "HK1/23", "HK2/23", "HK1/24", "HK2/24"],
        datasets: [
          {
            label: "GPA Học kỳ",
            data: [3.45, 3.52, 3.68, 3.61, 3.75, 3.71],
            borderColor: "#153898",
            backgroundColor: "rgba(21, 56, 152, 0.1)",
            tension: 0.4,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "#153898",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointHoverBackgroundColor: "#153898",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 3,
          },
          {
            label: "GPA Tích lũy",
            data: [3.45, 3.48, 3.54, 3.56, 3.6, 3.62],
            borderColor: "#4caf50",
            backgroundColor: "rgba(76, 175, 80, 0.1)",
            tension: 0.4,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "#4caf50",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointHoverBackgroundColor: "#4caf50",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              padding: 15,
              usePointStyle: true,
              font: {
                size: 13,
                weight: "500",
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 12,
            titleFont: {
              size: 14,
              weight: "bold",
            },
            bodyFont: {
              size: 13,
            },
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label + ": " + context.parsed.y.toFixed(2)
                );
              },
              afterLabel: function (context) {
                // Thêm xếp loại
                const value = context.parsed.y;
                if (value >= 3.6) return "Xuất sắc";
                if (value >= 3.2) return "Giỏi";
                if (value >= 2.5) return "Khá";
                if (value >= 2.0) return "Trung bình";
                return "Yếu";
              },
            },
          },
        },
        scales: {
          y: {
            min: 3.0,
            max: 4.0,
            ticks: {
              stepSize: 0.2,
              callback: function (value) {
                return value.toFixed(1);
              },
              font: {
                size: 12,
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
      },
    });
  }

  const semesterTabs = document.querySelectorAll(".semester-tab");
  semesterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      semesterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
      const semester = this.dataset.semester;
      console.log("Switched to:", semester);
      //TODO: Chuyển tab
    });
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  setTimeout(() => {
    const progressBars = document.querySelectorAll(".stat-progress-bar");
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }, 300);
});

const progressData = {
  totalCredits: 162,
  completedCredits: 122,
  currentCredits: 24,
  remainingCredits: 16,
  progressDiff: "+2%",
};

//Current academic year
const currentAcademicYear = "2023-2024";

const timelineData = [
  {
    semester: 1,
    year: "2022-2023",
    status: "completed",
    progress: 100,
    completedCredits: 12,
    totalCredits: 12,
    currentCredits: 0,
  },
  {
    semester: 2,
    year: "2022-2023",
    status: "completed",
    progress: 100,
    completedCredits: 12,
    totalCredits: 12,
    currentCredits: 0,
  },
  {
    semester: 3,
    year: "2023-2024",
    status: "completed",
    progress: 71,
    completedCredits: 15,
    totalCredits: 21,
    currentCredits: 0,
  },
  {
    semester: 4,
    year: "2023-2024",
    status: "active",
    progress: 100,
    completedCredits: 0,
    totalCredits: 19,
    currentCredits: 19,
  },
  {
    semester: 5,
    year: "2024-2025",
    status: "mixed",
    progress: 74,
    completedCredits: 10,
    totalCredits: 19,
    currentCredits: 4,
  },
  {
    semester: 6,
    year: "2024-2025",
    status: "future",
    progress: 0,
    completedCredits: 0,
    totalCredits: 21,
    currentCredits: 0,
  },
  {
    semester: 7,
    year: "2025-2026",
    status: "future",
    progress: 0,
    completedCredits: 0,
    totalCredits: 15,
    currentCredits: 0,
  },
  {
    semester: 8,
    year: "2025-2026",
    status: "future",
    progress: 0,
    completedCredits: 0,
    totalCredits: 15,
    currentCredits: 0,
  },
];

function renderTimeline() {
  const container = document.getElementById("timelineItems");
  const markersContainer = document.getElementById("timelineYearMarkers");
  const trackProgress = document.getElementById("timelineTrackProgress");

  if (container) container.innerHTML = "";
  if (markersContainer) markersContainer.innerHTML = "";

  const yearGroups = {};
  timelineData.forEach((sem) => {
    if (!yearGroups[sem.year]) {
      yearGroups[sem.year] = [];
    }
    yearGroups[sem.year].push(sem);
  });

  const uniqueYears = Object.keys(yearGroups);
  const totalSemesters = timelineData.length;

  const currentYearIndex = uniqueYears.indexOf(currentAcademicYear);
  if (currentYearIndex >= 0) {
    const yearSems = yearGroups[currentAcademicYear];
    const firstSemIndex = timelineData.findIndex(
      (s) => s.year === currentAcademicYear,
    );
    const markerPosition = ((firstSemIndex + 1) / totalSemesters) * 100;
    trackProgress.style.width = markerPosition + "%";
  }

  //Render semester circles
  timelineData.forEach((sem, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-semester", sem.semester);
    item.style.cursor = "pointer";

    const completedPercent = (sem.completedCredits / sem.totalCredits) * 100;
    const currentPercent = (sem.currentCredits / sem.totalCredits) * 100;
    const totalPercent = completedPercent + currentPercent;

    let circleClass = "";
    let circleStyle = "";
    let circleContent = `<span>HK${sem.semester}</span>`;

    if (sem.status === "completed" && sem.progress === 100) {
      circleClass = "completed";
    } else if (sem.status === "active" && sem.completedCredits === 0) {
      circleClass = "active";
    } else if (
      (sem.status === "mixed" || totalPercent > 0) &&
      sem.completedCredits > 0 &&
      sem.currentCredits > 0
    ) {
      circleClass = "partial-mixed";
      circleStyle = `style="--progress-green: ${completedPercent}; --progress-total: ${totalPercent}"`;
    } else if (
      sem.completedCredits > 0 &&
      sem.completedCredits < sem.totalCredits
    ) {
      circleClass = "partial-green";
      circleStyle = `style="--progress-green: ${completedPercent}"`;
    } else if (sem.currentCredits > 0 && sem.completedCredits === 0) {
      circleClass = "partial-yellow";
      circleStyle = `style="--progress-yellow: ${currentPercent}"`;
    } else {
      circleClass = "future";
    }

    let progressBarHTML = "";
    let progressTextClass = "";

    if (completedPercent > 0 && currentPercent > 0) {
      progressBarHTML = `
            <div class="timeline-progress-segment completed" style="width: ${completedPercent}%;"></div>
            <div class="timeline-progress-segment active" style="width: ${currentPercent}%;"></div>
          `;
      progressTextClass = totalPercent > 50 ? "light" : "";
    } else if (completedPercent > 0) {
      progressBarHTML = `<div class="timeline-progress-segment completed" style="width: ${completedPercent}%;"></div>`;
      progressTextClass = completedPercent > 50 ? "light" : "";
    } else if (currentPercent > 0) {
      progressBarHTML = `<div class="timeline-progress-segment active" style="width: ${currentPercent}%;"></div>`;
      progressTextClass = currentPercent > 50 ? "light" : "";
    }

    const displayPercent = Math.round(totalPercent);
    const displayCredits = `${sem.completedCredits + sem.currentCredits}/${sem.totalCredits}`;

    item.innerHTML = `
          <div class="timeline-circle-wrapper">
            <div class="timeline-circle ${circleClass}" ${circleStyle}>
              ${circleContent}
            </div>
          </div>
          <div class="timeline-info">
            <div class="timeline-semester">Học kỳ ${sem.semester}</div>
            <div class="timeline-credits">${displayCredits} tín chỉ</div>
          </div>
          <div class="timeline-progress">
            <div class="timeline-progress-bar">
              ${progressBarHTML}
              <div class="timeline-progress-text ${progressTextClass}">${displayPercent}%</div>
            </div>
          </div>
        `;

    container.appendChild(item);
  });

  const startMarker = document.createElement("div");
  startMarker.className = "timeline-year-marker";
  startMarker.style.left = "0%";
  startMarker.innerHTML = `
        <div class="timeline-year-dot current"></div>
        <div class="timeline-year-label">9/2022</div>
      `;
  markersContainer.appendChild(startMarker);

  uniqueYears.forEach((year, yearIndex) => {
    const yearSems = yearGroups[year];
    const firstSemIndex = timelineData.findIndex((s) => s.year === year);

    const middlePosition = firstSemIndex + 1;
    const positionPercent = (middlePosition / totalSemesters) * 100;

    const marker = document.createElement("div");
    marker.className = "timeline-year-marker";
    marker.style.left = positionPercent + "%";

    const dotClass = year <= currentAcademicYear ? "current" : "future";
    const semestersList = yearSems.map((s) => `HK${s.semester}`).join(", ");

    marker.innerHTML = `
          <div class="timeline-year-dot ${dotClass}"></div>
          <div class="timeline-year-label">${year}</div>
          <div class="timeline-year-semesters">${semestersList}</div>
        `;
    markersContainer.appendChild(marker);
  });

  const endMarker = document.createElement("div");
  endMarker.className = "timeline-year-marker";
  endMarker.style.left = "100%";
  endMarker.innerHTML = `
        <div class="timeline-year-dot future"></div>
        <div class="timeline-year-label">6/2026</div>
      `;
  markersContainer.appendChild(endMarker);
}

function renderProgress() {
  const data = progressData;

  // Update all progress data elements if they exist
  const totalCreditsEl = document.getElementById("totalCredits");
  const completedCreditsEl = document.getElementById("completedCredits");
  const currentCreditsEl = document.getElementById("currentCredits");
  const remainingCreditsEl = document.getElementById("remainingCredits");
  const progressDiffEl = document.getElementById("progressDiff");
  const overallPercentageEl = document.getElementById("overallPercentage");

  if (totalCreditsEl) totalCreditsEl.textContent = data.totalCredits;
  if (completedCreditsEl)
    completedCreditsEl.textContent = data.completedCredits;
  if (currentCreditsEl) currentCreditsEl.textContent = data.currentCredits;
  if (remainingCreditsEl)
    remainingCreditsEl.textContent = data.remainingCredits;
  if (progressDiffEl) progressDiffEl.textContent = data.progressDiff;

  const completedPercent = (
    (data.completedCredits / data.totalCredits) *
    100
  ).toFixed(1);
  const currentPercent = (
    (data.currentCredits / data.totalCredits) *
    100
  ).toFixed(1);
  const remainingPercent = (
    (data.remainingCredits / data.totalCredits) *
    100
  ).toFixed(1);

  if (overallPercentageEl) {
    overallPercentageEl.textContent = completedPercent + "%";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProgress();
  renderTimeline();

  // Add click handlers to timeline items after rendering
  setTimeout(() => {
    addTimelineClickHandlers();
  }, 100);
});

function addTimelineClickHandlers() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    item.addEventListener("click", function () {
      const semester = this.getAttribute("data-semester");
      scrollToSemester(semester);
    });
  });
}

function scrollToSemester(semester) {
  // Switch to semester view if not already
  const semesterTab = document.querySelector(".tab-btn:first-child");
  if (semesterTab && !semesterTab.classList.contains("active")) {
    semesterTab.click();
  }

  // Wait for view to render
  setTimeout(() => {
    // Find the section for this semester
    const sections = document.querySelectorAll(".expandable-section");
    let targetSection = null;

    sections.forEach((section) => {
      const headerText = section.querySelector(".section-header-text");
      if (headerText && headerText.textContent.includes(`Học kỳ ${semester}`)) {
        targetSection = section;
      }
    });

    if (targetSection) {
      // Expand the section if not expanded
      const header = targetSection.querySelector(".section-header");
      const content = targetSection.querySelector(".section-content");

      if (!header.classList.contains("expanded")) {
        header.click();
      }

      // Scroll to section with offset for header
      setTimeout(() => {
        const headerHeight =
          document.querySelector(".header-container")?.offsetHeight || 70;
        const yOffset = -headerHeight - 20;
        const y =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        // Highlight incomplete courses
        highlightIncompleteCourses(targetSection);
      }, 100);
    }
  }, 200);
}

// Export to global scope for mobile timeline
if (typeof window !== "undefined") {
  window.scrollToSemester = scrollToSemester;
}

function highlightIncompleteCourses(section) {
  // Remove previous highlights
  document.querySelectorAll(".highlight-incomplete").forEach((el) => {
    el.classList.remove("highlight-incomplete");
  });

  // Find all rows without completed status
  const rows = section.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    const completedCell = row.querySelector("td:last-child");
    if (completedCell && !completedCell.querySelector(".checkmark")) {
      row.classList.add("highlight-incomplete");

      // Remove highlight after 3 seconds
      setTimeout(() => {
        row.classList.remove("highlight-incomplete");
      }, 3000);
    }
  });
}

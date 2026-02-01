const rewardData = [
  {
    id: 1,
    rewardInfo: "Tham gia hoạt động tình nguyện cấp khoa",
    rewardPoint: 2,
    courseCode: "CT101",
    courseName: "Nhập môn Công nghệ thông tin",
    finalScore: 7.5,
    afterBonusScore: 9.5,
    status: 1,
    period: "Đợt 1 - HK1 2024-2025",
  },
  {
    id: 2,
    rewardInfo: "Đạt giải Nhì Olympic Toán học",
    rewardPoint: 3,
    courseCode: "MA201",
    courseName: "Toán cao cấp 2",
    finalScore: 6.8,
    afterBonusScore: 9.8,
    status: 1,
    period: "Đợt 2 - HK1 2024-2025",
  },
  {
    id: 3,
    rewardInfo: "Tham gia câu lạc bộ học thuật",
    rewardPoint: 1,
    courseCode: "KT102",
    courseName: "Kinh tế vi mô",
    finalScore: 8.0,
    afterBonusScore: 9.0,
    status: 0,
    period: "Đợt 1 - HK2 2024-2025",
  },
  {
    id: 4,
    rewardInfo: "Tham gia hội thảo chuyên ngành",
    rewardPoint: 1.5,
    courseCode: "QT301",
    courseName: "Quản trị chiến lược",
    finalScore: 5.9,
    afterBonusScore: 7.4,
    status: 2,
    period: "Đợt 1 - HK1 2024-2025",
  },
  {
    id: 5,
    rewardInfo: "Đạt giải Ba nghiên cứu khoa học sinh viên",
    rewardPoint: 2.5,
    courseCode: "CS404",
    courseName: "Hệ thống thông tin quản lý",
    finalScore: 7.0,
    afterBonusScore: 9.5,
    status: 0,
    period: "Đợt 2 - HK1 2024-2025",
  },
];

function calculateStats(data) {
  const totalPoints = data
    .filter((item) => item.status === 1)
    .reduce((sum, item) => sum + item.rewardPoint, 0);

  const appliedSubjects = data.filter((item) => item.status === 1).length;

  const approvedItems = data.filter((item) => item.status === 1);
  const gpaImprovement =
    approvedItems.length > 0
      ? approvedItems.reduce(
          (sum, item) => sum + (item.afterBonusScore - item.finalScore),
          0,
        ) / approvedItems.length
      : 0;

  const inProgressRequests = data.filter((item) => item.status === 0).length;

  return {
    totalPoints: totalPoints.toFixed(1),
    appliedSubjects,
    gpaImprovement: gpaImprovement.toFixed(2),
    inProgressRequests,
  };
}

function updateStats(data) {
  const stats = calculateStats(data);

  document.getElementById("totalPoints").textContent =
    `${stats.totalPoints} điểm`;
  document.getElementById("applySubjects").textContent =
    `${stats.appliedSubjects} môn`;
  document.getElementById("improvedPoint").textContent =
    `+${stats.gpaImprovement}`;
  document.getElementById("inprogressReq").textContent =
    `${stats.inProgressRequests} yêu cầu`;
}

function renderTable(data = rewardData) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    const status =
      item.status === 1
        ? `<span class="badge badge-completed">Đã duyệt</span>`
        : item.status === 0
          ? `<span class="badge badge-progress">Chưa duyệt</span>`
          : `<span class="badge badge-denied">Từ chối</span>`;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="ps-4">${item.rewardInfo}</td>
      <td class="text-center">+${item.rewardPoint}</td>
      <td class="text-center">${item.courseCode}</td>
      <td class="ps-4">${item.courseName}</td>
      <td class="text-center">${item.finalScore}</td>
      <td class="text-center">${item.afterBonusScore}</td>
      <td class="text-center">${status}</td>
    `;
    tableBody.appendChild(row);
  });

  updateStats(data);
}

function search() {
  const periodSelect = document.getElementById("periodSelect").value;
  const keyword = document
    .getElementById("keywordInput")
    .value.toLowerCase()
    .trim();

  let filtered = rewardData;

  if (periodSelect === "dot1-hk1") {
    filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK1"));
  } else if (periodSelect === "dot2-hk1") {
    filtered = filtered.filter((item) => item.period.includes("Đợt 2 - HK1"));
  } else if (periodSelect === "dot1-hk2") {
    filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK2"));
  }

  if (keyword) {
    filtered = filtered.filter(
      (item) =>
        item.rewardInfo.toLowerCase().includes(keyword) ||
        item.courseCode.toLowerCase().includes(keyword) ||
        item.courseName.toLowerCase().includes(keyword),
    );
  }

  renderTable(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();

  document.getElementById("periodSelect").addEventListener("change", search);
  document.getElementById("keywordInput").addEventListener("input", search);
});

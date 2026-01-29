/* Kết quả rèn luyện JavaScript */

// Sample data for training results
const trainingResultsData = [
    {
        id: 1,
        semester: 'HK1 (2025-2026)',
        score: 92,
        classification: 'Xuất sắc',
        isCurrent: true,
        expanded: true,
        violations: [
            {
                stt: 1,
                date: '15/10/2025',
                content: 'Tham gia ngày hội hiến máu nhân đạo cấp Trường',
                type: '—',
                note: 'Có giấy chứng nhận',
                points: '+5',
            },
            {
                stt: 2,
                date: '20/10/2025',
                content: 'Tham gia hoạt động tình nguyện mùa hè xanh',
                type: '—',
                note: 'Có xác nhận từ đơn vị',
                points: '+3',
            },
            {
                stt: 3,
                date: '05/11/2025',
                content: 'Đạt giải Nhì cuộc thi Hackathon cấp Khoa',
                type: '—',
                note: 'Có giấy khen',
                points: '+7',
            },
            {
                stt: 4,
                date: '15/11/2025',
                content: 'Tham gia câu lạc bộ tin học',
                type: '—',
                note: 'Tham gia đều đặn',
                points: '+2',
            },
        ],
    },
    {
        id: 2,
        semester: 'HK2 (2024-2025)',
        score: 70,
        classification: 'Khá',
        isCurrent: false,
        expanded: false,
        violations: [
            {
                stt: 1,
                date: '10/03/2025',
                content: 'Tham gia hoạt động chào cờ đầu tuần',
                type: '—',
                note: 'Điểm danh đầy đủ',
                points: '+2',
            },
            {
                stt: 2,
                date: '15/03/2025',
                content: 'Vi phạm quy định về trang phục',
                type: 'Nhắc nhở',
                note: 'Mặc quần jean rách',
                points: '-3',
            },
            {
                stt: 3,
                date: '20/04/2025',
                content: 'Tham gia lao động vệ sinh công cộng',
                type: '—',
                note: 'Hoàn thành tốt',
                points: '+3',
            },
            {
                stt: 4,
                date: '01/05/2025',
                content: 'Đi học muộn không lý do',
                type: 'Cảnh cáo',
                note: 'Lần thứ 2 trong tháng',
                points: '-5',
            },
            {
                stt: 5,
                date: '10/05/2025',
                content: 'Tham gia hoạt động văn nghệ khoa',
                type: '—',
                note: 'Biểu diễn xuất sắc',
                points: '+4',
            },
        ],
    },
    {
        id: 3,
        semester: 'HK1 (2024-2025)',
        score: 34,
        classification: 'Yếu',
        isCurrent: false,
        expanded: false,
        violations: [
            {
                stt: 1,
                date: '15/09/2024',
                content: 'Vắng mặt không phép tại lễ khai giảng',
                type: 'Cảnh cáo',
                note: 'Không có lý do chính đáng',
                points: '-10',
            },
            {
                stt: 2,
                date: '20/09/2024',
                content: 'Gây rối trong giờ học',
                type: 'Khiển trách',
                note: 'Làm ồn, ảnh hưởng lớp học',
                points: '-15',
            },
            {
                stt: 3,
                date: '01/10/2024',
                content: 'Vi phạm nội quy ký túc xá',
                type: 'Cảnh cáo',
                note: 'Về muộn giờ quy định',
                points: '-8',
            },
            {
                stt: 4,
                date: '15/10/2024',
                content: 'Không tham gia sinh hoạt lớp',
                type: 'Nhắc nhở',
                note: 'Vắng mặt 3 buổi liên tiếp',
                points: '-5',
            },
            {
                stt: 5,
                date: '05/11/2024',
                content: 'Hút thuốc trong khuôn viên trường',
                type: 'Khiển trách',
                note: 'Vi phạm nghiêm trọng',
                points: '-12',
            },
            {
                stt: 6,
                date: '20/11/2024',
                content: 'Tham gia lao động tập thể',
                type: '—',
                note: 'Thực hiện tốt',
                points: '+3',
            },
        ],
    },
    {
        id: 4,
        semester: 'HK2 (2023-2024)',
        score: 60,
        classification: 'Trung bình',
        isCurrent: false,
        expanded: false,
        violations: [
            {
                stt: 1,
                date: '10/02/2024',
                content: 'Tham gia hoạt động tình nguyện',
                type: '—',
                note: 'Nhiệt tình, tích cực',
                points: '+5',
            },
            {
                stt: 2,
                date: '15/03/2024',
                content: 'Nộp bài tập muộn nhiều lần',
                type: 'Nhắc nhở',
                note: 'Không có lý do hợp lý',
                points: '-3',
            },
            {
                stt: 3,
                date: '01/04/2024',
                content: 'Tham gia hoạt động thể thao',
                type: '—',
                note: 'Đạt huy chương đồng',
                points: '+4',
            },
        ],
    },
    {
        id: 5,
        semester: 'HK1 (2023-2024)',
        score: 30,
        classification: 'Kém',
        isCurrent: false,
        expanded: false,
        violations: [
            {
                stt: 1,
                date: '05/09/2023',
                content: 'Gian lận trong thi cử',
                type: 'Kỷ luật',
                note: 'Bị đình chỉ thi 1 môn',
                points: '-20',
            },
            {
                stt: 2,
                date: '15/09/2023',
                content: 'Đánh nhau trong trường',
                type: 'Khiển trách',
                note: 'Vi phạm nghiêm trọng',
                points: '-25',
            },
            {
                stt: 3,
                date: '20/10/2023',
                content: 'Vi phạm quy định sử dụng mạng nội bộ',
                type: 'Cảnh cáo',
                note: 'Truy cập nội dung không phù hợp',
                points: '-10',
            },
            {
                stt: 4,
                date: '10/11/2023',
                content: 'Tham gia sinh hoạt lớp',
                type: '—',
                note: 'Có mặt đầy đủ',
                points: '+2',
            },
        ],
    },
];

// Function to get classification class
function getClassificationClass(classification) {
    const classMap = {
        'Xuất sắc': 'status-xuatsac',
        Khá: 'status-kha',
        'Trung bình': 'status-trungbinh',
        Yếu: 'status-yeu',
        Kém: 'status-kem',
    };
    return classMap[classification] || '';
}

// Function to get score class
function getScoreClass(score) {
    if (score >= 90) return 'score';
    if (score >= 70) return 'score';
    if (score >= 50) return 'score-low';
    return 'score-fail';
}

// Function to render semester card
function renderSemesterCard(data) {
    const iconClass = data.isCurrent
        ? 'semester-icon'
        : 'semester-icon inactive';
    const expandIcon = data.expanded
        ? '<i class="fa-solid fa-angle-up"></i>'
        : '<i class="fa-solid fa-chevron-down"></i>';
    const expandClass = data.expanded ? 'active' : '';
    const detailsClass = data.expanded ? 'show' : '';

    let violationsHTML = '';
    if (data.violations && data.violations.length > 0) {
        violationsHTML = data.violations
            .map(
                (v) => `
            <tr>
                <td>${String(v.stt).padStart(2, '0')}</td>
                <td>${v.date}</td>
                <td>${v.content}</td>
                <td>${v.type}</td>
                <td style="font-style: italic;">${v.note}</td>
                <td style="color: ${v.points.startsWith('+') ? '#10b981' : '#ef4444'};">${v.points}</td>
            </tr>
        `,
            )
            .join('');
    } else {
        violationsHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2rem; color: #94a3b8;">
                    Không có dữ liệu
                </td>
            </tr>
        `;
    }

    return `
        <div class="semester-card">
            <div class="semester-header" onclick="toggleSemester(this, ${data.id})">
                <div class="semester-left">
                    <div class="${iconClass}">
                        <span class="material-symbols-outlined"><i class="fa-solid fa-calendar"></i></span>
                    </div>
                    <div class="semester-info">
                        <h3>${data.semester}</h3>
                        
                    </div>
                </div>
                <div class="semester-right">
                    <div class="semester-stat">
                        <p class="semester-stat-label">Điểm rèn luyện</p>
                        <p class="semester-stat-value ${getScoreClass(data.score)}">${data.score}</p>
                    </div>
                    <div class="semester-stat">
                        <p class="semester-stat-label">Xếp loại</p>
                        <div class="status-badge ${getClassificationClass(data.classification)}">${data.classification}</div>
                    </div>
                    <span class="material-symbols-outlined expand-icon ${expandClass}">${expandIcon}</span>
                </div>
            </div>
            <div class="semester-details ${detailsClass}">
                <div class="detail-table-wrapper">
                    <table class="detail-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày vi phạm</th>
                                <th>Nội dung</th>
                                <th>Hình thức</th>
                                <th>Ghi chú</th>
                                <th>Điểm +/-</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${violationsHTML}
                        </tbody>
                    </table>
                </div>
                ${
                    data.violations && data.violations.length > 0
                        ? `
                <div class="detail-buttons">
                    <button class="btn-detail" onclick="viewDetailReport('${data.semester}')">Xem báo cáo chi tiết</button>
                </div>
                `
                        : ''
                }
            </div>
        </div>
    `;
}

// Function to initialize and render all semester cards
function initializeTrainingResults() {
    const container = document.querySelector('.content-section');
    if (!container) return;

    container.innerHTML = trainingResultsData
        .map((data) => renderSemesterCard(data))
        .join('');
}

// Function to toggle semester details
function toggleSemester(element, semesterId) {
    const details = element.nextElementSibling;
    const icon = element.querySelector('.expand-icon');

    // Find the semester data and update expanded state
    const semester = trainingResultsData.find((s) => s.id === semesterId);
    if (semester) {
        semester.expanded = !semester.expanded;
    }

    // Toggle display
    details.classList.toggle('show');
    icon.classList.toggle('active');

    // Update icon with animation
    if (details.classList.contains('show')) {
        icon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    } else {
        icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
    }
}

// Function to view detail report
function viewDetailReport(semester) {
    window.location.href =
        'chi-tiet-ket-qua-ren-luyen.html?semester=' +
        encodeURIComponent(semester);
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function () {
    initializeTrainingResults();
});
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getStatusColor(score) {
    if (score >= 90) return 'emerald';
    if (score >= 80) return 'green';
    if (score >= 70) return 'blue';
    if (score >= 60) return 'amber';
    if (score >= 50) return 'orange';
    return 'red';
}

function getStatusText(score) {
    if (score >= 90) return 'Xuất sắc';
    if (score >= 80) return 'Khá';
    if (score >= 70) return 'Trung bình';
    if (score >= 60) return 'Yếu';
    return 'Kém';
}

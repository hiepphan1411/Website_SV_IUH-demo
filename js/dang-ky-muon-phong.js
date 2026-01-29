/* Đăng ký mượn phòng JavaScript */

// Data for dropdowns
const dropdownData = {
    semesters: [
        'HK2 (2025-2026)',
        'HK1 (2025-2026)',
        'HK2 (2024-2025)',
        'HK1 (2024-2025)',
    ],
    campuses: ['Cơ sở chính', 'Cơ sở 2', 'Cơ sở 3'],
    buildings: [
        'Trung tâm GDTX Hải Phòng',
        'Dãy A',
        'Dãy B',
        'Dãy C',
        'Dãy D',
        'Dãy E',
    ],
    rooms: [
        'Phòng 101',
        'Phòng 102',
        'Phòng 103',
        'Phòng 201',
        'Phòng 202',
        'Phòng 203',
        'Phòng A1.01',
        'Phòng A1.02',
        'Phòng B2.05',
        'Phòng C3.12',
    ],
    departments: [
        'Trung tâm Công nghệ thông tin và thư viện',
        'Khoa Công nghệ thông tin',
        'Khoa Quản trị kinh doanh',
        'Phòng Đào tạo',
        'Câu lạc bộ Sinh viên',
        'Khoa Kế toán - Kiểm toán',
        'Khoa Cơ khí',
        'Khoa Điện - Điện tử',
        'Khoa Kinh tế',
        'Khoa Ngoại ngữ',
    ],
    statuses: [
        'Đề xuất',
        'Đã xác nhận',
        'Đã duyệt',
        'Không xác nhận',
        'Từ chối',
    ],
};

// Sample data for demonstration
const reservationData = [
    {
        id: 1,
        stt: 1,
        thu: 6,
        tiet: '1 - 3',
        phongNhan: 'A1.01',
        ngayBatDau: '23/01/2026',
        ngayKetThuc: '23/01/2026',
        soCho: 5,
        donVi: 'Trung tâm Công nghệ thông tin và thư viện',
        trangThai: 'Đã duyệt',
        lyDo: 'Học tập',
        lyDoKhongDuyet: '-',
        approval: {
            ngayXacNhan: '22/01/2026',
            lyDoKhongXacNhan: '----',
            nguoiXacNhan: 'Nguyễn Văn A',
            ngayDuyet: '23/01/2026',
            lyDoKhongDuyet: '----',
            nguoiDuyet: 'Trần Thị B',
            ngayHuyPhong: '----',
            lyDoHuyPhong: '----',
            nguoiHuyPhong: '----',
            ngayDoiPhong: '----',
            lyDoDoiPhong: '----',
            nguoiDoiPhong: '----',
        },
    },
    {
        id: 2,
        stt: 2,
        thu: 5,
        tiet: '4 - 6',
        phongNhan: 'B2.05',
        ngayBatDau: '24/01/2026',
        ngayKetThuc: '24/01/2026',
        soCho: 10,
        donVi: 'Khoa Công nghệ thông tin',
        trangThai: 'Đã xác nhận',
        lyDo: 'Họp nhóm',
        lyDoKhongDuyet: '-',
        approval: {
            ngayXacNhan: '23/01/2026',
            lyDoKhongXacNhan: '----',
            nguoiXacNhan: 'Lê Văn C',
            ngayDuyet: '----',
            lyDoKhongDuyet: 'Chưa đến hạn duyệt',
            nguoiDuyet: '----',
            ngayHuyPhong: '----',
            lyDoHuyPhong: '----',
            nguoiHuyPhong: '----',
            ngayDoiPhong: '----',
            lyDoDoiPhong: '----',
            nguoiDoiPhong: '----',
        },
    },
    {
        id: 3,
        stt: 3,
        thu: 3,
        tiet: '7 - 9',
        phongNhan: '-',
        ngayBatDau: '25/01/2026',
        ngayKetThuc: '25/01/2026',
        soCho: 15,
        donVi: 'Khoa Quản trị kinh doanh',
        trangThai: 'Đề xuất',
        lyDo: 'Seminar',
        lyDoKhongDuyet: '-',
        approval: {
            ngayXacNhan: '----',
            lyDoKhongXacNhan: 'Chưa xác nhận',
            nguoiXacNhan: '----',
            ngayDuyet: '----',
            lyDoKhongDuyet: '----',
            nguoiDuyet: '----',
            ngayHuyPhong: '----',
            lyDoHuyPhong: '----',
            nguoiHuyPhong: '----',
            ngayDoiPhong: '----',
            lyDoDoiPhong: '----',
            nguoiDoiPhong: '----',
        },
    },
    {
        id: 4,
        stt: 4,
        thu: 2,
        tiet: '1 - 5',
        phongNhan: 'C3.12',
        ngayBatDau: '26/01/2026',
        ngayKetThuc: '26/01/2026',
        soCho: 30,
        donVi: 'Phòng Đào tạo',
        trangThai: 'Đã duyệt',
        lyDo: 'Thi học kỳ',
        lyDoKhongDuyet: '-',
        approval: {
            ngayXacNhan: '24/01/2026',
            lyDoKhongXacNhan: '----',
            nguoiXacNhan: 'Phạm Thị D',
            ngayDuyet: '25/01/2026',
            lyDoKhongDuyet: '----',
            nguoiDuyet: 'Hoàng Văn E',
            ngayHuyPhong: '----',
            lyDoHuyPhong: '----',
            nguoiHuyPhong: '----',
            ngayDoiPhong: '24/01/2026',
            lyDoDoiPhong: 'Phòng cũ bảo trì',
            nguoiDoiPhong: 'Hoàng Văn E',
        },
    },
    {
        id: 5,
        stt: 5,
        thu: 7,
        tiet: '10 - 12',
        phongNhan: '-',
        ngayBatDau: '27/01/2026',
        ngayKetThuc: '27/01/2026',
        soCho: 8,
        donVi: 'Câu lạc bộ Sinh viên',
        trangThai: 'Không xác nhận',
        lyDo: 'Hoạt động ngoại khóa',
        lyDoKhongDuyet: 'Không đủ điều kiện',
        approval: {
            ngayXacNhan: '26/01/2026',
            lyDoKhongXacNhan: 'Trùng lịch sử dụng phòng',
            nguoiXacNhan: 'Nguyễn Văn F',
            ngayDuyet: '----',
            lyDoKhongDuyet: '----',
            nguoiDuyet: '----',
            ngayHuyPhong: '----',
            lyDoHuyPhong: '----',
            nguoiHuyPhong: '----',
            ngayDoiPhong: '----',
            lyDoDoiPhong: '----',
            nguoiDoiPhong: '----',
        },
    },
];

// Initialize table with data
function initializeTable() {
    const tbody = document.getElementById('reservationBody');
    tbody.innerHTML = '';

    reservationData.forEach((item) => {
        // Data row
        const dataRow = document.createElement('tr');
        dataRow.className = 'data-row';
        dataRow.innerHTML = `
            <td><input type="checkbox" class="checkbox-custom" onclick="event.stopPropagation()" /></td>
            <td>${item.stt}</td>
            <td>${item.thu}</td>
            <td>${item.tiet}</td>
            <td>${item.phongNhan}</td>
            <td>${item.ngayBatDau}</td>
            <td>${item.ngayKetThuc}</td>
            <td>${item.soCho}</td>
            <td>${item.donVi}</td>
            <td>-</td>
            <td><span class="status-badge status-approved">${item.trangThai}</span></td>
            <td>${item.lyDo}</td>
            <td>${item.lyDoKhongDuyet}</td>
            <td onclick="event.stopPropagation()">
                <span class="action-text" onclick="editRecord(this)"><i class="fa-solid fa-pen-to-square"></i></span> |
                <span class="action-text" style="color: red;" onclick="deleteRecord(this)"><i class="fa-solid fa-trash-can"></i></span>
            </td>
        `;
        dataRow.onclick = function () {
            toggleDetail(this);
        };
        tbody.appendChild(dataRow);

        // Detail row
        const detailRow = document.createElement('tr');
        detailRow.className = 'detail-row';
        detailRow.innerHTML = `
            <td colspan="14">
                <div class="collapsible-detail">
                    <div class="collapsible-detail-title">CHI TIẾT PHÊ DUYỆT</div>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.ngayXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO KHÔNG XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.lyDoKhongXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.nguoiXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.ngayDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO KHÔNG DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.lyDoKhongDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.nguoiDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.ngayHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.lyDoHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.nguoiHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.ngayDoiPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.lyDoDoiPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.nguoiDoiPhong}</span>
                        </div>
                    </div>
                  
                </div>
            </td>
        `;
        tbody.appendChild(detailRow);
    });

    // Update button state and select all checkbox after table refresh
    if (typeof updateDeleteButtonState === 'function') {
        updateDeleteButtonState();
    }
    if (typeof updateSelectAllCheckbox === 'function') {
        updateSelectAllCheckbox();
    }
}

// Toggle detail row visibility
function toggleDetail(row) {
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.classList.contains('detail-row')) {
        nextRow.classList.toggle('show');
    }
}

// Edit record from table
function editRecord(element) {
    const row = element.closest('tr');
    const stt = row.querySelector('td:nth-child(2)').textContent;
    console.log('Edit record clicked for STT:', stt);

    // Get data from row
    const data = reservationData.find((item) => item.stt == stt);
    if (data) {
        // Fill modal with data
        document.getElementById('modalDot').value = 'HK2 (2025-2026)';
        document.getElementById('modalTuTiet').value =
            data.tiet.split(' - ')[0];
        document.getElementById('modalDenTiet').value =
            data.tiet.split(' - ')[1];
        document.getElementById('modalThoiGianBatDau').value = '2026-01-23';
        document.getElementById('modalThoiGianKetThuc').value = '2026-01-23';
        document.getElementById('modalCoSo').value = 'Cơ sở chính';
        document.getElementById('modalDayNha').value =
            'Trung tâm GDTX Hải Phòng';
        document.getElementById('modalPhong').value =
            'Trung tâm GDTX Hải Phòng';
        document.getElementById('modalSoCho').value = data.soCho;
        document.getElementById('modalThuocDonVi').value = data.donVi;
        document.getElementById('modalLyDoMuonPhong').value = data.lyDo;

        // Store editing ID
        document.getElementById('btnSaveReservation').dataset.editId = stt;

        // Open modal
        const modal = new bootstrap.Modal(
            document.getElementById('addReservationModal'),
        );
        modal.show();
    }
}

// Delete record from table
function deleteRecord(element) {
    const row = element.closest('tr');
    const stt = row.querySelector('td:nth-child(2)').textContent;
    if (confirm('Bạn có chắc chắn muốn xóa phiếu số ' + stt + '?')) {
        const detailRow = row.nextElementSibling;
        row.remove();
        if (detailRow && detailRow.classList.contains('detail-row')) {
            detailRow.remove();
        }

        // Remove from data array
        const index = reservationData.findIndex((item) => item.stt == stt);
        if (index > -1) {
            reservationData.splice(index, 1);
        }

        console.log('Phiếu số ' + stt + ' đã được xóa!');

        // Update button state and select all checkbox after row deletion
        if (typeof updateDeleteButtonState === 'function') {
            updateDeleteButtonState();
        }
        if (typeof updateSelectAllCheckbox === 'function') {
            updateSelectAllCheckbox();
        }
    }
}

// Edit from detail section
function editDetailRecord(element) {
    const detailRow = element.closest('.detail-row');
    const dataRow = detailRow.previousElementSibling;
    const stt = dataRow.querySelector('td:nth-child(2)').textContent;
    console.log('Edit detail record clicked for STT:', stt);
    editRecord(dataRow.querySelector('.action-text'));
}

// Delete from detail section
function deleteDetailRecord(element) {
    const detailRow = element.closest('.detail-row');
    const dataRow = detailRow.previousElementSibling;
    const stt = dataRow.querySelector('td:nth-child(2)').textContent;
    if (confirm('Bạn có chắc chắn muốn xóa phiếu số ' + stt + '?')) {
        dataRow.remove();
        detailRow.remove();

        // Remove from data array
        const index = reservationData.findIndex((item) => item.stt == stt);
        if (index > -1) {
            reservationData.splice(index, 1);
        }

        console.log('Phiếu số ' + stt + ' đã được xóa!');
    }
}

// Function to populate dropdowns with dynamic data
function populateDropdowns() {
    // Populate search form dropdowns
    populateSelect('semester', dropdownData.semesters, '-- Chọn đợt --');
    populateSelect(
        'fromPeriod',
        Array.from({ length: 12 }, (_, i) => i + 1),
        '-- Chọn --',
    );
    populateSelect(
        'toPeriod',
        Array.from({ length: 12 }, (_, i) => i + 1),
        '-- Chọn --',
    );
    populateSelect('faculty', dropdownData.departments, '-- Chọn đơn vị --');
    populateSelect('building', dropdownData.buildings, '-- Chọn dãy nhà --');
    populateSelect('room', dropdownData.rooms, '-- Chọn phòng --');
    populateSelect('status', dropdownData.statuses, '-- Chọn trạng thái --');

    // Populate modal dropdowns
    populateSelect('modalDot', dropdownData.semesters, '-- Chọn đợt --');
    populateSelect(
        'modalTuTiet',
        Array.from({ length: 12 }, (_, i) => i + 1),
        '--',
    );
    populateSelect(
        'modalDenTiet',
        Array.from({ length: 12 }, (_, i) => i + 1),
        '--',
    );
    populateSelect('modalCoSo', dropdownData.campuses, '-- Chọn cơ sở --');
    populateSelect('modalDayNha', dropdownData.buildings, '-- Chọn dãy nhà --');
    populateSelect('modalPhong', dropdownData.rooms, '-- Chọn phòng --');
    populateSelect(
        'modalThuocDonVi',
        dropdownData.departments,
        '-- Chọn đơn vị --',
    );
}

// Helper function to populate a select element
function populateSelect(elementId, dataArray, defaultOption = null) {
    const selectElement = document.getElementById(elementId);
    if (!selectElement) return;

    // Clear existing options except the first one (if it's a placeholder)
    selectElement.innerHTML = '';

    // Add default option
    if (defaultOption) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = defaultOption;
        selectElement.appendChild(option);
    }

    // Add data options
    dataArray.forEach((item) => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        selectElement.appendChild(option);
    });
}

// Function to filter reservations based on search criteria
function filterReservations() {
    // Get filter values
    const filters = {
        semester: document.getElementById('semester').value,
        fromPeriod: document.getElementById('fromPeriod').value,
        toPeriod: document.getElementById('toPeriod').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        faculty: document.getElementById('faculty').value,
        building: document.getElementById('building').value,
        room: document.getElementById('room').value,
        status: document.getElementById('status').value,
    };

    console.log('Filters:', filters);

    // Filter data
    const filteredData = reservationData.filter((item) => {
        // Filter by period range
        if (filters.fromPeriod && filters.toPeriod) {
            const itemPeriods = item.tiet
                .split(' - ')
                .map((p) => parseInt(p.trim()));
            const filterFrom = parseInt(filters.fromPeriod);
            const filterTo = parseInt(filters.toPeriod);

            // Check if item's period range overlaps with filter range
            if (itemPeriods[1] < filterFrom || itemPeriods[0] > filterTo) {
                return false;
            }
        }

        // Filter by start date
        if (filters.startDate) {
            const filterDate = new Date(filters.startDate);
            const itemDate = parseVietnameseDate(item.ngayBatDau);
            if (itemDate < filterDate) {
                return false;
            }
        }

        // Filter by end date
        if (filters.endDate) {
            const filterDate = new Date(filters.endDate);
            const itemDate = parseVietnameseDate(item.ngayKetThuc);
            if (itemDate > filterDate) {
                return false;
            }
        }

        // Filter by department (faculty) - EXACT MATCH
        if (filters.faculty && item.donVi !== filters.faculty) {
            return false;
        }

        // Filter by room - EXACT MATCH
        if (filters.room && item.phongNhan !== filters.room) {
            return false;
        }

        // Filter by status - EXACT MATCH
        if (filters.status && item.trangThai !== filters.status) {
            return false;
        }

        return true;
    });

    console.log('Filtered results:', filteredData.length, 'items');

    // Update table with filtered data
    displayFilteredData(filteredData);
}

// Helper function to parse Vietnamese date format (dd/mm/yyyy)
function parseVietnameseDate(dateStr) {
    const parts = dateStr.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

// Function to display filtered data
function displayFilteredData(data) {
    const tbody = document.getElementById('reservationBody');
    tbody.innerHTML = '';

    if (data.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML =
            '<td colspan="14" style="text-align: center; padding: 2rem; color: #999;">Không tìm thấy dữ liệu phù hợp</td>';
        tbody.appendChild(emptyRow);
        return;
    }

    data.forEach((item) => {
        // Data row
        const dataRow = document.createElement('tr');
        dataRow.className = 'data-row';
        dataRow.innerHTML = `
            <td><input type="checkbox" class="checkbox-custom" onclick="event.stopPropagation()" /></td>
            <td>${item.stt}</td>
            <td>${item.thu}</td>
            <td>${item.tiet}</td>
            <td>${item.phongNhan}</td>
            <td>${item.ngayBatDau}</td>
            <td>${item.ngayKetThuc}</td>
            <td>${item.soCho}</td>
            <td>${item.donVi}</td>
            <td>-</td>
            <td><span class="status-badge status-approved">${item.trangThai}</span></td>
            <td>${item.lyDo}</td>
            <td>${item.lyDoKhongDuyet}</td>
            <td onclick="event.stopPropagation()">
                <span class="action-text" onclick="editRecord(this)"><i class="fa-solid fa-pen-to-square"></i></span> |
                <span class="action-text" style="color: red;" onclick="deleteRecord(this)"><i class="fa-solid fa-trash-can"></i></span>
            </td>
        `;
        dataRow.onclick = function () {
            toggleDetail(this);
        };
        tbody.appendChild(dataRow);

        // Detail row
        const detailRow = document.createElement('tr');
        detailRow.className = 'detail-row';
        detailRow.innerHTML = `
            <td colspan="14">
                <div class="collapsible-detail">
                    <div class="collapsible-detail-title">CHI TIẾT PHÊ DUYỆT</div>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.ngayXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO KHÔNG XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.lyDoKhongXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI XÁC NHẬN</span>
                            <span class="detail-item-value dash">${item.approval.nguoiXacNhan}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.ngayDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO KHÔNG DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.lyDoKhongDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI DUYỆT</span>
                            <span class="detail-item-value dash">${item.approval.nguoiDuyet}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.ngayHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.lyDoHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI HỦY PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.nguoiHuyPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGÀY ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.ngayDoiPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">LÝ DO ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.lyDoDoiPhong}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-item-label">NGƯỜI ĐỐI PHÒNG</span>
                            <span class="detail-item-value dash">${item.approval.nguoiDoiPhong}</span>
                        </div>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(detailRow);
    });

    // Update button state and select all checkbox after table refresh
    if (typeof updateDeleteButtonState === 'function') {
        updateDeleteButtonState();
    }
    if (typeof updateSelectAllCheckbox === 'function') {
        updateSelectAllCheckbox();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Populate dropdowns with dynamic data
    populateDropdowns();

    // Initialize table
    initializeTable();

    // Handle save button in modal
    const btnSaveReservation = document.getElementById('btnSaveReservation');
    if (btnSaveReservation) {
        btnSaveReservation.addEventListener('click', function () {
            const editId = this.dataset.editId;

            // Collect form data
            const newReservation = {
                dot: document.getElementById('modalDot').value,
                tuTiet: document.getElementById('modalTuTiet').value,
                denTiet: document.getElementById('modalDenTiet').value,
                thoiGianBatDau: document.getElementById('modalThoiGianBatDau')
                    .value,
                thoiGianKetThuc: document.getElementById('modalThoiGianKetThuc')
                    .value,
                coSo: document.getElementById('modalCoSo').value,
                dayNha: document.getElementById('modalDayNha').value,
                phong: document.getElementById('modalPhong').value,
                soCho: document.getElementById('modalSoCho').value,
                thuocDonVi: document.getElementById('modalThuocDonVi').value,
                lyDoMuonPhong:
                    document.getElementById('modalLyDoMuonPhong').value,
            };

            console.log('Form data:', newReservation);

            if (editId) {
                // Update existing record
                const item = reservationData.find((item) => item.stt == editId);
                if (item) {
                    item.thu = 6; // Example
                    item.tiet = `${newReservation.tuTiet} - ${newReservation.denTiet}`;
                    item.ngayBatDau = newReservation.thoiGianBatDau
                        .split('-')
                        .reverse()
                        .join('/');
                    item.ngayKetThuc = newReservation.thoiGianKetThuc
                        .split('-')
                        .reverse()
                        .join('/');
                    item.soCho = parseInt(newReservation.soCho);
                    item.donVi = newReservation.thuocDonVi;
                    item.lyDo = newReservation.lyDoMuonPhong;

                    console.log('Cập nhật phiếu số:', editId);
                }
                delete this.dataset.editId;
            } else {
                // Add new record
                const newItem = {
                    id: reservationData.length + 1,
                    stt: reservationData.length + 1,
                    thu: 6,
                    tiet: `${newReservation.tuTiet} - ${newReservation.denTiet}`,
                    phongNhan: '-',
                    ngayBatDau: newReservation.thoiGianBatDau
                        .split('-')
                        .reverse()
                        .join('/'),
                    ngayKetThuc: newReservation.thoiGianKetThuc
                        .split('-')
                        .reverse()
                        .join('/'),
                    soCho: parseInt(newReservation.soCho),
                    donVi: newReservation.thuocDonVi,
                    trangThai: 'Đề xuất',
                    lyDo: newReservation.lyDoMuonPhong,
                    lyDoKhongDuyet: '-',
                    approval: {
                        ngayXacNhan: '28/01/2026',
                        lyDoKhongXacNhan: '----',
                        nguoiXacNhan: 'Nguyễn Văn A',
                        ngayDuyet: '29/01/2026',
                        lyDoKhongDuyet: '----',
                        nguoiDuyet: 'Trần Thị B',
                        ngayHuyPhong: '----',
                        lyDoHuyPhong: '----',
                        nguoiHuyPhong: '----',
                        ngayDoiPhong: '----',
                        lyDoDoiPhong: '----',
                        nguoiDoiPhong: '----',
                    },
                };

                reservationData.push(newItem);
                console.log('Thêm phiếu mới thành công!');
            }

            // Refresh table
            initializeTable();

            // Close modal
            const modal = bootstrap.Modal.getInstance(
                document.getElementById('addReservationModal'),
            );
            modal.hide();

            // Reset form
            resetModalForm();
        });
    }

    // Function to reset modal form
    function resetModalForm() {
        document.getElementById('modalDot').selectedIndex = 0;
        document.getElementById('modalTuTiet').selectedIndex = 0;
        document.getElementById('modalDenTiet').selectedIndex = 0;
        document.getElementById('modalThoiGianBatDau').value = '';
        document.getElementById('modalThoiGianKetThuc').value = '';
        document.getElementById('modalCoSo').selectedIndex = 0;
        document.getElementById('modalDayNha').selectedIndex = 0;
        document.getElementById('modalPhong').selectedIndex = 0;
        document.getElementById('modalSoCho').value = '';
        document.getElementById('modalThuocDonVi').selectedIndex = 0;
        document.getElementById('modalLyDoMuonPhong').value = '';
    }

    // Reset form when modal is closed
    document
        .getElementById('addReservationModal')
        .addEventListener('hidden.bs.modal', function () {
            resetModalForm();
            // Clear edit ID if exists
            const btnSave = document.getElementById('btnSaveReservation');
            if (btnSave && btnSave.dataset.editId) {
                delete btnSave.dataset.editId;
            }
        });

    // Handle search button
    document
        .querySelector('.btn-search')
        .addEventListener('click', function () {
            console.log('Tìm kiếm được kích hoạt');
            filterReservations();
        });

    // Auto-search when any filter input changes - Tự động tìm kiếm khi thay đổi bất kỳ bộ lọc nào
    const searchFilters = [
        'semester',
        'fromPeriod',
        'toPeriod',
        'startDate',
        'endDate',
        'faculty',
        'building',
        'room',
        'status',
    ];

    searchFilters.forEach(function (filterId) {
        const element = document.getElementById(filterId);
        if (element) {
            // For text/date inputs, use 'input' event
            if (element.tagName === 'INPUT') {
                element.addEventListener('input', function () {
                    filterReservations();
                });
            }
            // For select dropdowns, use 'change' event
            else if (element.tagName === 'SELECT') {
                element.addEventListener('change', function () {
                    filterReservations();
                });
            }
        }
    });

    // Handle refresh button
    document
        .querySelector('.btn-refresh')
        .addEventListener('click', function () {
            console.log('Làm mới form');
            // Reset all select to first option
            document
                .querySelectorAll('.search-form select')
                .forEach(function (select) {
                    select.selectedIndex = 0;
                });
            // Reset date inputs
            document.getElementById('startDate').value = '';
            document.getElementById('endDate').value = '';
            // Show all data
            initializeTable();
        });

    // Handle select all checkbox
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function () {
            const isChecked = this.checked;
            document
                .querySelectorAll('#reservationBody .checkbox-custom')
                .forEach(function (checkbox) {
                    checkbox.checked = isChecked;
                });
            updateDeleteButtonState();
        });
    }

    // Handle individual checkbox change
    document.addEventListener('change', function (e) {
        if (
            e.target.classList.contains('checkbox-custom') &&
            e.target.id !== 'selectAllCheckbox'
        ) {
            updateSelectAllCheckbox();
            updateDeleteButtonState();
        }
    });

    // Handle delete selected button
    const btnDeleteSelected = document.querySelector('.btn-delete-selected');
    if (btnDeleteSelected) {
        // Initial state
        updateDeleteButtonState();

        btnDeleteSelected.addEventListener('click', function () {
            const selectedCheckboxes = document.querySelectorAll(
                '#reservationBody .checkbox-custom:checked',
            );

            if (selectedCheckboxes.length === 0) {
                console.log('Không có dòng nào được chọn');
                return;
            }

            if (
                confirm(
                    `Bạn có chắc chắn muốn xóa ${selectedCheckboxes.length} phiếu đã chọn?`,
                )
            ) {
                const sttToDelete = [];

                selectedCheckboxes.forEach((checkbox) => {
                    const row = checkbox.closest('tr');
                    const stt =
                        row.querySelector('td:nth-child(2)').textContent;
                    sttToDelete.push(parseInt(stt));
                });

                // Remove from data array
                sttToDelete.forEach((stt) => {
                    const index = reservationData.findIndex(
                        (item) => item.stt == stt,
                    );
                    if (index > -1) {
                        reservationData.splice(index, 1);
                    }
                });

                console.log(`Đã xóa ${sttToDelete.length} phiếu:`, sttToDelete);

                // Refresh table
                initializeTable();

                // Uncheck select all
                if (selectAllCheckbox) {
                    selectAllCheckbox.checked = false;
                }

                updateDeleteButtonState();
            }
        });
    }
});

// Function to update select all checkbox state
function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    if (!selectAllCheckbox) return;

    const allCheckboxes = document.querySelectorAll(
        '#reservationBody .checkbox-custom',
    );
    const checkedCheckboxes = document.querySelectorAll(
        '#reservationBody .checkbox-custom:checked',
    );

    if (allCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === allCheckboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    }
}

// Function to update delete button state
function updateDeleteButtonState() {
    const btnDeleteSelected = document.querySelector('.btn-delete-selected');
    if (!btnDeleteSelected) return;

    const checkedCheckboxes = document.querySelectorAll(
        '#reservationBody .checkbox-custom:checked',
    );

    if (checkedCheckboxes.length > 0) {
        btnDeleteSelected.disabled = false;
        btnDeleteSelected.innerHTML = `<i class="fa-solid fa-trash"></i> Xóa (${checkedCheckboxes.length})`;
    } else {
        btnDeleteSelected.disabled = true;
        btnDeleteSelected.innerHTML = '<i class="fa-solid fa-trash"></i> Xóa';
    }
}

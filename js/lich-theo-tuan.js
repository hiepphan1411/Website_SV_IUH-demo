// Data lịch học và lịch thi đầy đủ
const scheduleData = {
    // Tuần 0: 1-5/1/2026 (Thứ 5-CN)
    '2026-01-01': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Nhập môn Lập trình',
            code: 'DHKTPM18A - 42030001101',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.01',
            teacher: 'TS. Nguyễn Văn Z',
        },
    ],
    '2026-01-02': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Lập trình C',
            code: 'DHKTPM18A - 42030002201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.01',
            teacher: 'TS. Trần Thị Y',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Toán cao cấp',
            code: 'DHKTPM18A - 42030003301',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.02',
            teacher: 'TS. Lê Văn X',
        },
    ],
    '2026-01-03': [
        {
            time: 'morning',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra đầu kỳ - Nhập môn CNTT',
            code: 'DHKTPM18A - 42030004401',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.05',
            teacher: 'Ban Giám thị',
        },
    ],
    '2026-01-04': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Tiếng Anh chuyên ngành',
            code: 'DHKTPM18A - 42030005501',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'ThS. Phạm Thị W',
        },
    ],
    '2026-01-05': [
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Giáo dục thể chất',
            code: 'DHKTPM18A - 42030006601',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'Sân vận động',
            teacher: 'Võ Văn V',
        },
    ],

    // Tuần 1: 6-12/1/2026
    '2026-01-06': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Nguyễn Văn A',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Cơ sở dữ liệu',
            code: 'DHKTPM18B - 42030013701',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.01',
            teacher: 'TS. Trần Thị B',
        },
    ],
    '2026-01-07': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Hà Thị C',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'online',
            title: 'Lập trình Web',
            code: 'DHKTPM18A - 42030018901',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Ngô Thị D',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra giữa kỳ - Toán rời rạc',
            code: 'DHKTPM18A - 42030010201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.05',
            teacher: 'TS. Lê Văn E',
        },
    ],
    '2026-01-08': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Kiến trúc và Thiết kế Phần mềm',
            code: 'DHKTPM18A - 42030015401',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Nguyễn Văn A',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'suspended',
            title: 'Hệ điều hành (TẠM NGỪNG)',
            code: 'DHKTPM18A - 42030014801',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A2.04',
            teacher: 'TS. Trần Văn E',
        },
    ],
    '2026-01-09': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Mạng máy tính',
            code: 'DHKTPM18A - 42030016501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.02',
            teacher: 'TS. Huỳnh Thị B',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Cấu trúc dữ liệu',
            code: 'DHKTPM18A - 42030011101',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.01',
            teacher: 'Ban Giám thị',
        },
    ],
    '2026-01-10': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Trí tuệ nhân tạo',
            code: 'DHKTPM18A - 42030019801',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.05',
            teacher: 'TS. Phạm Văn F',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Lập trình hướng đối tượng',
            code: 'DHKTPM18A - 42030012801',
            period: '10 - 12 (7:30 - 12:00)',
            room: 'A1.02',
            teacher: 'Ban Giám thị',
        },
    ],
    '2026-01-11': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'An toàn thông tin',
            code: 'DHKTPM18A - 42030020501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.01',
            teacher: 'TS. Võ Thị G',
        },
    ],
    '2026-01-12': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Phân tích thiết kế hệ thống',
            code: 'DHKTPM18A - 42030017201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.03',
            teacher: 'TS. Đỗ Văn H',
        },
    ],

    // Tuần 2: 13-19/1/2026
    '2026-01-13': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Cơ sở dữ liệu',
            code: 'DHKTPM18B - 42030013701',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'B3.02',
            teacher: 'TS. Nguyễn Thị I',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Công nghệ phần mềm',
            code: 'DHKTPM18A - 42030018201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A2.06',
            teacher: 'TS. Lý Văn J',
        },
    ],
    '2026-01-14': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Lập trình di động',
            code: 'DHKTPM18A - 42030021201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Mai Thị K',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra - Kiến trúc và Thiết kế PM',
            code: 'DHKTPM18A - 42030015401',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.03',
            teacher: 'TS. Nguyễn Văn A',
        },
    ],
    '2026-01-15': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Đồ án chuyên ngành',
            code: 'DHKTPM18A - 42030022901',
            period: '1 - 6 (7:00 - 12:00)',
            room: 'A3.03',
            teacher: 'TS. Vũ Văn L',
        },
    ],
    '2026-01-16': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Mạng máy tính',
            code: 'DHKTPM18A - 42030016501',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.03',
            teacher: 'TS. Bùi Thị M',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'suspended',
            title: 'IoT và Ứng dụng (TẠM NGỪNG)',
            code: 'DHKTPM18A - 42030023601',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A2.07',
            teacher: 'TS. Hoàng Văn N',
        },
    ],
    '2026-01-17': [
        {
            time: 'morning',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Hệ quản trị CSDL',
            code: 'DHKTPM18A - 42030024301',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.04',
            teacher: 'Ban Giám thị',
        },
    ],
    '2026-01-18': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Kinh tế vi mô',
            code: 'DHKTPM18A - 42030035101',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A2.11',
            teacher: 'TS. Hà Văn Y',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Photoshop',
            code: 'DHKTPM18A - 42030036201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.08',
            teacher: 'ThS. Mai Thị Z',
        },
    ],
    '2026-01-19': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Digital Marketing',
            code: 'DHKTPM18A - 42030037301',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Lâm Văn AA',
        },
    ],

    // Tuần 3: 20-26/1/2026
    '2026-01-20': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Blockchain và Ứng dụng',
            code: 'DHKTPM18A - 42030025001',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.04',
            teacher: 'TS. Phan Văn O',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Cloud Computing',
            code: 'DHKTPM18A - 42030026701',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.04',
            teacher: 'TS. Đinh Thị P',
        },
    ],
    '2026-01-21': [
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Machine Learning cơ bản',
            code: 'DHKTPM18A - 42030027401',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Trương Văn Q',
        },
    ],
    '2026-01-22': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Phát triển ứng dụng Web',
            code: 'DHKTPM18A - 42030028101',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A2.08',
            teacher: 'TS. Lâm Thị R',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra giữa kỳ - An toàn thông tin',
            code: 'DHKTPM18A - 42030020501',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.05',
            teacher: 'TS. Võ Thị G',
        },
    ],
    '2026-01-23': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Lab Trí tuệ nhân tạo',
            code: 'DHKTPM18A - 42030019801',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.05',
            teacher: 'TS. Phạm Văn F',
        },
    ],
    '2026-01-24': [
        {
            time: 'morning',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Mạng máy tính',
            code: 'DHKTPM18A - 42030016501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.01',
            teacher: 'Ban Giám thị',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'theory',
            title: 'Quản lý dự án phần mềm',
            code: 'DHKTPM18A - 42030029801',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A2.09',
            teacher: 'TS. Cao Văn S',
        },
    ],
    '2026-01-25': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Phát triển Game',
            code: 'DHKTPM18A - 42030038401',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.06',
            teacher: 'TS. Phan Văn BB',
        },
    ],
    '2026-01-26': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Unity',
            code: 'DHKTPM18A - 42030039501',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.09',
            teacher: 'ThS. Đinh Thị CC',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra cuối kỳ - Blockchain',
            code: 'DHKTPM18A - 42030025001',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.06',
            teacher: 'TS. Phan Văn O',
        },
    ],

    // Tuần 4: 27/1 - 2/2/2026
    '2026-01-27': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Xử lý ảnh và thị giác máy',
            code: 'DHKTPM18A - 42030030501',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.05',
            teacher: 'TS. Tôn Thị T',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'online',
            title: 'Học máy nâng cao',
            code: 'DHKTPM18A - 42030040101',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Đỗ Văn DD',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Thực hành TensorFlow',
            code: 'DHKTPM18A - 42030041201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.10',
            teacher: 'ThS. Ngô Thị EE',
        },
    ],
    '2026-01-28': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Thực hành DevOps',
            code: 'DHKTPM18A - 42030031201',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.06',
            teacher: 'TS. Đặng Văn U',
        },
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Cloud Native Architecture',
            code: 'DHKTPM18A - 42030042301',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A2.12',
            teacher: 'TS. Lê Thị FF',
        },
        {
            time: 'noon',
            category: 'exam',
            type: 'exam',
            title: 'Kiểm tra giữa kỳ - Xử lý ảnh',
            code: 'DHKTPM18A - 42030030501',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A1.07',
            teacher: 'TS. Tôn Thị T',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'online',
            title: 'Microservices Architecture',
            code: 'DHKTPM18A - 42030032901',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'Online',
            teacher: 'TS. Hồ Thị V',
        },
    ],
    '2026-01-29': [
        {
            time: 'morning',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Công nghệ phần mềm',
            code: 'DHKTPM18A - 42030018201',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A1.02',
            teacher: 'Ban Giám thị',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'theory',
            title: 'Kiến trúc hệ thống phân tán',
            code: 'DHKTPM18A - 42030043401',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.13',
            teacher: 'TS. Vũ Văn GG',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Lab Kubernetes',
            code: 'DHKTPM18A - 42030044501',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.11',
            teacher: 'ThS. Cao Thị HH',
        },
    ],
    '2026-01-30': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Big Data và Phân tích dữ liệu',
            code: 'DHKTPM18A - 42030033601',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A2.10',
            teacher: 'TS. Dương Văn W',
        },
        {
            time: 'morning',
            category: 'study',
            type: 'online',
            title: 'Data Visualization',
            code: 'DHKTPM18A - 42030045601',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'Online',
            teacher: 'TS. Mai Văn II',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'practice',
            title: 'Thực hành Apache Spark',
            code: 'DHKTPM18A - 42030046701',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.12',
            teacher: 'ThS. Trần Thị JJ',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'suspended',
            title: 'Thực tập doanh nghiệp (TẠM NGỪNG)',
            code: 'DHKTPM18A - 42030034301',
            period: '7 - 12 (12:30 - 17:00)',
            room: 'Công ty',
            teacher: 'TS. Lương Thị X',
        },
    ],
    '2026-01-31': [
        {
            time: 'morning',
            category: 'study',
            type: 'practice',
            title: 'Lab Machine Learning',
            code: 'DHKTPM18A - 42030027401',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'B3.07',
            teacher: 'TS. Trương Văn Q',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'theory',
            title: 'Deep Learning cơ bản',
            code: 'DHKTPM18A - 42030047801',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'A3.07',
            teacher: 'TS. Hoàng Văn KK',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Thi cuối kỳ - Machine Learning',
            code: 'DHKTPM18A - 42030027401',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.08',
            teacher: 'Ban Giám thị',
        },
    ],
    '2026-02-01': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Natural Language Processing',
            code: 'DHKTPM18A - 42030048901',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A2.14',
            teacher: 'TS. Phan Thị LL',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'online',
            title: 'Computer Vision',
            code: 'DHKTPM18A - 42030049101',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'Online',
            teacher: 'TS. Lý Văn MM',
        },
        {
            time: 'afternoon',
            category: 'study',
            type: 'practice',
            title: 'Thực hành OpenCV',
            code: 'DHKTPM18A - 42030050201',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'B3.13',
            teacher: 'ThS. Võ Thị NN',
        },
    ],
    '2026-02-02': [
        {
            time: 'morning',
            category: 'study',
            type: 'theory',
            title: 'Reinforcement Learning',
            code: 'DHKTPM18A - 42030051301',
            period: '1 - 3 (7:00 - 9:30)',
            room: 'A3.08',
            teacher: 'TS. Bùi Văn OO',
        },
        {
            time: 'noon',
            category: 'study',
            type: 'practice',
            title: 'Lab PyTorch',
            code: 'DHKTPM18A - 42030052401',
            period: '4 - 6 (9:30 - 12:00)',
            room: 'B3.14',
            teacher: 'ThS. Đỗ Thị PP',
        },
        {
            time: 'afternoon',
            category: 'exam',
            type: 'exam',
            title: 'Tổng kết học kỳ - AI & ML',
            code: 'DHKTPM18A - 42030053501',
            period: '7 - 9 (12:30 - 15:00)',
            room: 'A1.09',
            teacher: 'Ban Giám thị',
        },
    ],
};

// ==============================================
// GLOBAL VARIABLES
// ==============================================
const TODAY = new Date(); // Ngày hôm nay - không thay đổi
let currentMonth = TODAY.getMonth();
let currentYear = TODAY.getFullYear();
let selectedDate = null; // Ngày được CHỌN BỞI USER (click vào mini calendar) - null = không chọn
let viewDate = new Date(TODAY); // Tuần đang XEM (dùng cho navigation)
let activeFilter = 'all'; // 'all', 'study', 'exam'

// ==============================================
// CONSTANTS
// ==============================================
const MONTH_NAMES = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

const DAY_NAMES = [
    'THỨ 2',
    'THỨ 3',
    'THỨ 4',
    'THỨ 5',
    'THỨ 6',
    'THỨ 7',
    'CHỦ NHẬT',
];
const TIME_PERIODS = ['Sáng', 'Trưa', 'Chiều'];
const TIME_KEYS = ['morning', 'noon', 'afternoon'];

// ==============================================
// INITIALIZATION
// ==============================================
$(document).ready(function () {
    initializeCalendar();
    setupEventHandlers();
});

function initializeCalendar() {
    renderMiniCalendar(currentMonth, currentYear);
    renderWeekCalendar(viewDate); // Dùng viewDate thay vì selectedDate
    $('.button-schedule').first().addClass('active');
}

function setupEventHandlers() {
    setupFilterButtons();
    setupNavigationButtons();
    setupMonthNavigation();
    setupTodayButton();
    setupPrintButton();
    setupMiniCalendarClick(); // Thêm handler cho mini calendar
}

// ==============================================
// FILTER BUTTONS
// ==============================================
function setupFilterButtons() {
    $('.button-schedule').click(function () {
        // Đánh dấu button được chọn
        $('.button-schedule').removeClass('active');
        $(this).addClass('active');

        // Lấy text và chuẩn hóa (loại bỏ khoảng trắng thừa)
        const filterText = $(this).find('p').text().trim().replace(/\s+/g, ' ');

        // Map text sang filter type
        const filterMap = {
            'Tất cả': 'all', // Hiển thị cả lịch học và lịch thi
            'Lịch học': 'study', // Chỉ hiển thị lịch học (category: 'study')
            'Lịch thi': 'exam', // Chỉ hiển thị lịch thi (category: 'exam')
        };

        activeFilter = filterMap[filterText] || 'all';

        // Render lại tuần hiện tại với filter mới
        // viewDate giữ nguyên => không đổi tuần đang xem
        renderWeekCalendar(viewDate);
    });
}

// ==============================================
// NAVIGATION BUTTONS
// ==============================================
function setupNavigationButtons() {
    // Previous week - Nút mũi tên trái (dùng class cụ thể)
    $('.btn-prev-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() - 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        // XÓA selection vì user KHÔNG chọn ngày, chỉ đổi tuần
        selectedDate = null;
        updateMiniCalendarSelection(); // Sẽ không tô đậm gì
    });

    // Next week - Nút mũi tên phải (dùng class cụ thể)
    $('.btn-next-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() + 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        // XÓA selection vì user KHÔNG chọn ngày, chỉ đổi tuần
        selectedDate = null;
        updateMiniCalendarSelection(); // Sẽ không tô đậm gì
    });
}

function setupTodayButton() {
    // Nút "Hôm nay" - Quay về tuần hiện tại và CHỌN ngày hôm nay
    $('.navbar-brand').click(function () {
        selectedDate = new Date(TODAY); // CHỌN ngày hôm nay
        viewDate = new Date(TODAY); // Xem tuần hiện tại

        currentMonth = TODAY.getMonth();
        currentYear = TODAY.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);
        updateMiniCalendarSelection(); // Sẽ tô đậm ngày hôm nay
    });
}

function setupMonthNavigation() {
    // Previous month
    $('.month-selector button:first-child').click(function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });

    // Next month
    $('.month-selector button:last-child').click(function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });
}

function setupPrintButton() {
    $('.btn-print').click(function () {
        window.print();
    });
}

// ==============================================
// RENDER MINI CALENDAR
// ==============================================
function renderMiniCalendar(month, year) {
    $('.month-text').text(`${MONTH_NAMES[month]}, ${year}`);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let html = '';
    let dayCount = 1;
    let nextMonthDay = 1;

    // Generate calendar grid
    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                // Previous month days
                const prevDay = daysInPrevMonth - firstDay + j + 1;
                html += `<td class="other-month" data-date="${year}-${month}-${prevDay}">${prevDay}</td>`;
            } else if (dayCount > daysInMonth) {
                // Next month days
                html += `<td class="other-month" data-date="${year}-${month + 2}-${nextMonthDay}">${nextMonthDay}</td>`;
                nextMonthDay++;
            } else {
                // Current month days
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;

                // Kiểm tra xem có phải ngày hôm nay không (dùng TODAY thay vì currentDate)
                const isToday =
                    dayCount === TODAY.getDate() &&
                    month === TODAY.getMonth() &&
                    year === TODAY.getFullYear();
                const todayClass = isToday ? ' today' : '';
                html += `<td class="${todayClass}" data-date="${dateStr}">${dayCount}</td>`;
                dayCount++;
            }
        }
        html += '</tr>';
        if (dayCount > daysInMonth) break;
    }

    $('.mini-calendar tbody').html(html);
}

// ==============================================
// MINI CALENDAR CLICK HANDLER
// ==============================================
function setupMiniCalendarClick() {
    // Sử dụng event delegation để tránh bind nhiều lần
    $('.mini-calendar tbody')
        .off('click', 'td:not(.other-month)')
        .on('click', 'td:not(.other-month)', function () {
            const dateStr = $(this).data('date');
            const dateParts = dateStr.split('-');

            // User CHỌN ngày → set cả 2 biến
            selectedDate = new Date(
                dateParts[0],
                dateParts[1] - 1,
                dateParts[2],
            );
            viewDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

            // Tô đậm ngày được chọn
            $('.mini-calendar td').removeClass('selected');
            $(this).addClass('selected');

            // Render tuần chứa ngày được chọn
            renderWeekCalendar(viewDate);
        });
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================
function updateMiniCalendarSelection() {
    // Xóa tất cả selection trước
    $('.mini-calendar td').removeClass('selected');

    // Nếu KHÔNG có ngày được chọn → không tô đậm gì
    if (!selectedDate) return;

    // Có ngày được chọn → tô đậm ngày đó
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    $(`.mini-calendar td[data-date="${dateStr}"]`).addClass('selected');
}

function getMonday(date) {
    // Tạo bản sao hoàn toàn mới để không mutate date gốc
    const d = new Date(date.getTime());
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    return d;
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// ==============================================
// RENDER WEEK CALENDAR
// ==============================================
function renderWeekCalendar(date) {
    const monday = getMonday(date);

    renderWeekHeader(monday);
    renderWeekBody(monday);
    attachEventHandlers();
}

function renderWeekHeader(monday) {
    let headerHtml = '<div class="time-row">';
    headerHtml += '<div class="time-slot"></div>';

    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + i);
        const dayNum = currentDay.getDate();

        // So sánh với TODAY (ngày hôm nay) chứ không phải currentDate
        const isToday = currentDay.toDateString() === TODAY.toDateString();
        const todayClass = isToday ? ' today-column' : '';

        headerHtml += `
            <div class="day-column${todayClass}">
                <div class="day-name">${DAY_NAMES[i]}</div>
                <div class="day-number${isToday ? ' today' : ''}">${dayNum}</div>
            </div>
        `;
    }
    headerHtml += '</div>';
    $('.calendar-header').html(headerHtml);
}

function renderWeekBody(monday) {
    let bodyHtml = '';

    // Duyệt qua 3 ca: Sáng, Trưa, Chiều
    for (let t = 0; t < TIME_PERIODS.length; t++) {
        bodyHtml += '<div class="time-row">';
        bodyHtml += `<div class="time-slot">${TIME_PERIODS[t]}</div>`;

        // Duyệt qua 7 ngày trong tuần (Thứ 2 -> Chủ nhật)
        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(monday);
            currentDay.setDate(monday.getDate() + i);
            const dateStr = formatDate(currentDay);

            // So sánh với TODAY (ngày hôm nay) chứ không phải currentDate
            const isToday = currentDay.toDateString() === TODAY.toDateString();
            const todayClass = isToday ? ' today-column' : '';

            // Lấy tất cả lịch của ngày này
            const daySchedule = scheduleData[dateStr] || [];

            // Lọc theo ca và theo filter (Tất cả/Lịch học/Lịch thi)
            const timeEvents = daySchedule.filter((e) => {
                // Chỉ lấy events của ca hiện tại (morning/noon/afternoon)
                if (e.time !== TIME_KEYS[t]) return false;

                // Áp dụng filter: 'all' = tất cả, 'study' = lịch học, 'exam' = lịch thi
                if (activeFilter === 'all') return true;
                return e.category === activeFilter;
            });

            bodyHtml += `<div class="day-column${todayClass}">${renderEvents(timeEvents)}</div>`;
        }

        bodyHtml += '</div>';
    }
    $('.calendar-body').html(bodyHtml);
}

function attachEventHandlers() {
    $('.event').click(function () {
        const title = $(this).find('.event-title').text();
        const code = $(this).find('.event-code').text();
        const teacher = $(this).find('.event-teacher').text();
        alert(`${title}\n${code}\n${teacher}`);
    });
}

// ==============================================
// RENDER EVENTS
// ==============================================
function renderEvents(events) {
    if (events.length === 0) return '';

    return events
        .map(
            (event) => `
        <div class="event ${event.type}">
            <div class="event-title">${event.title}</div>
            <div class="event-code">${event.code}</div>
            <div class="event-time">
                <span class="label-time">Tiết:</span>
                ${event.period}
            </div>
            <div class="event-room">
                <span class="label-room">Phòng:</span>
                ${event.room}
            </div>
            <div class="event-teacher">
                <span class="label-teacher">GV:</span>
                ${event.teacher}
            </div>
        </div>
    `,
        )
        .join('');
}

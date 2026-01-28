const courses = [
    // Không có điều kiện tiên quyết
    {
        id: 1,
        code: 'THCS101',
        name: 'Lập trình hướng đối tượng',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },
    //  Không có điều kiện
    {
        id: 2,
        code: 'THCS102',
        name: 'Cấu trúc dữ liệu và giải thuật',
        credits: 4,
        required: true,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },
    //  Học trước (A) - Cần môn 1
    {
        id: 3,
        code: 'THCS201',
        name: 'Cơ sở dữ liệu',
        credits: 3,
        required: true,
        condition: 'A', // Học trước - Chưa học môn tiên quyết
        prerequisiteId: 1, // Cần học Lập trình hướng đối tượng
        type: 'new',
    },
    // Tiên quyết đã hoàn thành (B) - Đã học môn 1
    {
        id: 4,
        code: 'THCS202',
        name: 'Lập trình Web',
        credits: 4,
        required: true,
        condition: 'B', // Tiên quyết đã hoàn thành
        prerequisiteId: 1, // Đã học Lập trình hướng đối tượng
        type: 'new',
    },
    // Song hành (C) - Có thể học cùng môn 2
    {
        id: 5,
        code: 'THCS203',
        name: 'Hệ điều hành',
        credits: 3,
        required: true,
        condition: 'C', // Song hành
        prerequisiteId: 2, // Có thể học cùng với Cấu trúc dữ liệu
        type: 'new',
    },
    //  Không có điều kiện
    {
        id: 6,
        code: 'THCS204',
        name: 'Mạng máy tính',
        credits: 3,
        required: false,
        condition: null,
        prerequisiteId: null,
        type: 'new',
    },
    // Tiên quyết đã hoàn thành (B) - Đã học môn 3
    {
        id: 7,
        code: 'THCS301',
        name: 'Công nghệ phần mềm',
        credits: 3,
        required: true,
        condition: 'B', // Tiên quyết đã hoàn thành
        prerequisiteId: 3, // Đã học Cơ sở dữ liệu
        type: 'new',
    },
    // Học trước (A) - Cần môn 4
    {
        id: 8,
        code: 'THCS302',
        name: 'Phát triển ứng dụng di động',
        credits: 4,
        required: false,
        condition: 'A', // Học trước - Chưa học môn tiên quyết
        prerequisiteId: 4, // Cần học Lập trình Web
        type: 'new',
    },
    // Song hành (C) - Có thể học cùng môn 2
    {
        id: 9,
        code: 'THCS303',
        name: 'Trí tuệ nhân tạo',
        credits: 3,
        required: false,
        condition: 'C', // Song hành
        prerequisiteId: 2, // Có thể học cùng với Cấu trúc dữ liệu
        type: 'new',
    },
    // Học trước (A) - Cần môn 6
    {
        id: 10,
        code: 'THCS304',
        name: 'An toàn thông tin',
        credits: 3,
        required: true,
        condition: 'A', // Học trước - Chưa học môn tiên quyết
        prerequisiteId: 6, // Cần học Mạng máy tính
        type: 'new',
    },
    // Tiên quyết đã hoàn thành (B) - Đã học môn 7
    {
        id: 11,
        code: 'THCS401',
        name: 'Thực tập dự án',
        credits: 4,
        required: true,
        condition: 'B', // Tiên quyết đã hoàn thành
        prerequisiteId: 7, // Đã học Công nghệ phần mềm
        type: 'new',
    },
    // Tiên quyết đã hoàn thành (B) - Đã học môn 3
    {
        id: 12,
        code: 'THCS402',
        name: 'Phân tích dữ liệu lớn',
        credits: 3,
        required: false,
        condition: 'B', // Tiên quyết đã hoàn thành
        prerequisiteId: 3, // Đã học Cơ sở dữ liệu
        type: 'new',
    },
];

// Data lớp học phần
const classes = {
    1: [
        {
            id: '01',
            courseCode: '4203001366',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 80,
            registered: 75,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 3 )',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Nguyễn Văn A',
                    slots: 80,
                    registered: 81,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Nguyễn Văn A',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 2,
                    day: 'Th 3 (Tiết 7 -> 12 )',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Nguyễn Văn A',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 3,
                    day: 'Th 5 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Trần Thị B',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 4,
                    day: 'Th 6 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Trần Văn C',
                    slots: 20,
                    registered: 20,
                },
            ],
        },
        {
            id: '02',
            courseCode: '4203001366',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 80,
            registered: 80,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Chiều (7 -> 12)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS2',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Lê Văn D',
                    slots: 80,
                    registered: 80,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Lê Văn D',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 2,
                    day: 'Th 5 (Tiết 7 -> 12 )',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Lê Văn D',
                    slots: 20,
                    registered: 20,
                },
            ],
        },
        {
            id: '03',
            courseCode: '4203001366',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 80,
            registered: 60,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 3)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Phạm Văn E',
                    slots: 80,
                    registered: 60,
                },
            ],
            practiceClasses: [],
        },
    ],
    2: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 80,
            registered: 50,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Hoàng Văn F',
                    slots: 80,
                    registered: 50,
                },
            ],
            practiceClasses: [],
        },
    ],
    3: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 100,
            registered: 95,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Võ Văn G',
                    slots: 100,
                    registered: 95,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Đặng Thị H',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 2,
                    day: 'Th 4 (Tiết 7 -> 12 )',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Đặng Thị H',
                    slots: 20,
                    registered: 20,
                },
                {
                    group: 3,
                    day: 'Th 5 (Tiết 1 -> 3 )',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Bùi Văn I',
                    slots: 20,
                    registered: 15,
                },
            ],
        },
    ],
    4: [
        {
            id: '01',
            courseCode: '4203001369',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 70,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Chiều (7 -> 12)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS2',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Nguyễn Minh J',
                    slots: 70,
                    registered: 65,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.12',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Nguyễn Minh J',
                    slots: 25,
                    registered: 25,
                },
                {
                    group: 2,
                    day: 'Th 7 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.12',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Mai Văn K',
                    slots: 25,
                    registered: 20,
                },
            ],
        },
    ],
    5: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 90,
            registered: 85,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T6',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS3',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'PGS.TS Lê Thị L',
                    slots: 90,
                    registered: 85,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.13',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Trần Văn M',
                    slots: 30,
                    registered: 30,
                },
            ],
        },
    ],
    6: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 60,
            registered: 45,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Phạm Thị N',
                    slots: 60,
                    registered: 45,
                },
            ],
            practiceClasses: [],
        },
    ],
    7: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 75,
            registered: 70,
            theoryClasses: [
                {
                    group: 1,
                    day: 'CN',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS2',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Hoàng Văn O',
                    slots: 75,
                    registered: 70,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.14',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Hoàng Văn O',
                    slots: 25,
                    registered: 23,
                },
            ],
        },
    ],
    8: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 80,
            registered: 78,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Chiều (7 -> 12)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS3',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Đỗ Văn P',
                    slots: 80,
                    registered: 78,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.15',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Vũ Thị Q',
                    slots: 26,
                    registered: 26,
                },
            ],
        },
    ],
    9: [
        {
            id: '01',
            courseCode: '4203001368',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 65,
            registered: 60,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS1',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Bùi Văn R',
                    slots: 65,
                    registered: 60,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B1.11',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Ngô Thị S',
                    slots: 22,
                    registered: 20,
                },
            ],
        },
    ],
    10: [
        {
            id: '01',
            courseCode: '4203001378',
            courseName: 'Automat & ngôn ngữ hình thức',
            credits: 3,
            slots: 50,
            registered: 40,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Chiều (7 -> 12)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'CS2',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Lý Văn T',
                    slots: 50,
                    registered: 40,
                },
            ],
            practiceClasses: [],
        },
    ],
    11: [
        {
            id: '01',
            courseCode: '4203001370',
            courseName: 'Hệ điều hành',
            credits: 3,
            slots: 100,
            registered: 92,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T2',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.101',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'PGS.TS Nguyễn Văn U',
                    slots: 100,
                    registered: 92,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.01',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Trần Thị V',
                    slots: 30,
                    registered: 30,
                },
                {
                    group: 2,
                    day: 'Th 4 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.01',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Lê Văn W',
                    slots: 30,
                    registered: 28,
                },
                {
                    group: 3,
                    day: 'Th 6 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.02',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Phạm Văn X',
                    slots: 30,
                    registered: 25,
                },
            ],
        },
        {
            id: '02',
            courseCode: '4203001370',
            courseName: 'Hệ điều hành',
            credits: 3,
            slots: 80,
            registered: 75,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T4',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.102',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Võ Thị Y',
                    slots: 80,
                    registered: 75,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 5 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.03',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Hoàng Văn Z',
                    slots: 26,
                    registered: 25,
                },
                {
                    group: 2,
                    day: 'Th 7 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B2.03',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Đặng Văn AA',
                    slots: 26,
                    registered: 25,
                },
            ],
        },
    ],
    12: [
        // Cơ sở dữ liệu
        {
            id: '01',
            courseCode: '4203001371',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 120,
            registered: 115,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T3',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.201',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'PGS.TS Nguyễn Thị BB',
                    slots: 120,
                    registered: 115,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 2 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Trần Văn CC',
                    slots: 30,
                    registered: 30,
                },
                {
                    group: 2,
                    day: 'Th 2 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.01',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Lê Thị DD',
                    slots: 30,
                    registered: 30,
                },
                {
                    group: 3,
                    day: 'Th 4 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.02',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Phạm Văn EE',
                    slots: 30,
                    registered: 28,
                },
                {
                    group: 4,
                    day: 'Th 6 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.03',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Võ Văn FF',
                    slots: 30,
                    registered: 27,
                },
            ],
        },
        {
            id: '02',
            courseCode: '4203001371',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 100,
            registered: 88,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T5',
                    time: 'Sáng (1 -> 6)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.202',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'TS Hoàng Văn GG',
                    slots: 100,
                    registered: 88,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'Th 3 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.04',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Đỗ Thị HH',
                    slots: 25,
                    registered: 22,
                },
                {
                    group: 2,
                    day: 'Th 5 (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.04',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Bùi Văn II',
                    slots: 25,
                    registered: 23,
                },
                {
                    group: 3,
                    day: 'Th 7 (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.05',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Ngô Văn JJ',
                    slots: 25,
                    registered: 21,
                },
            ],
        },
        {
            id: '03',
            courseCode: '4203001371',
            courseName: 'Cơ sở dữ liệu',
            credits: 3,
            slots: 80,
            registered: 65,
            theoryClasses: [
                {
                    group: 1,
                    day: 'T7',
                    time: 'Chiều (7 -> 12)',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'A.203',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Lý Thị KK',
                    slots: 80,
                    registered: 65,
                },
            ],
            practiceClasses: [
                {
                    group: 1,
                    day: 'CN (Tiết 1 -> 3)',
                    time: 'Sáng',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.06',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Mai Văn LL',
                    slots: 22,
                    registered: 20,
                },
                {
                    group: 2,
                    day: 'CN (Tiết 7 -> 12)',
                    time: 'Chiều',
                    room: 'Cơ sở 1 (Thành phố Hồ Chí Minh)',
                    building: 'B3.06',
                    startDate: '31/12/2025',
                    endDate: '01/04/2026',
                    instructor: 'ThS Vũ Văn MM',
                    slots: 22,
                    registered: 20,
                },
            ],
        },
    ],
};

let selectedCourse = null;
let selectedClass = null;
let registeredClasses = [];

// Khởi tạo trang
function init() {
    console.log('Initializing page...');
    console.log('Courses:', courses);
    renderCourseTable();
    initScheduleGrid();
    updateMobileSchedule(2);
    attachEventHandlers();
}

// Render bảng môn học
function renderCourseTable() {
    const searchText = $('#searchCourse').val().toLowerCase();
    const activeTab = $('.tab-item.active').data('tab');

    console.log('Rendering courses, activeTab:', activeTab);

    const filtered = courses.filter((course) => {
        const matchSearch =
            course.code.includes(searchText) ||
            course.name.toLowerCase().includes(searchText);
        const matchTab = course.type === activeTab;

        // Kiểm tra xem môn học đã được đăng ký chưa
        const isRegistered = registeredClasses.some(
            (reg) => reg.courseId === course.id,
        );

        // Chỉ hiển thị các môn chưa đăng ký
        return matchSearch && matchTab && !isRegistered;
    });

    console.log('Filtered courses:', filtered.length);

    const tbody = $('#courseTable tbody');
    tbody.empty();

    filtered.forEach((course, index) => {
        const statusIcon = course.required
            ? '<span class="status-icon pass">✓</span>'
            : '<span class="status-icon fail">✕</span>';

        // Tạo tooltip cho điều kiện
        let conditionTooltip = '';
        let conditionDisplay = '';

        // Lấy thông tin môn tiên quyết nếu có
        const prerequisite = course.prerequisiteId
            ? courses.find((c) => c.id === course.prerequisiteId)
            : null;

        if (course.condition === 'A') {
            // Học trước, chưa hoàn thành môn tiên quyết
            conditionDisplay = 'A';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #dc3545; font-weight: bold; margin-bottom: 8px; font-size: 13px;">MÔN HỌC TIÊN QUYẾT (B)</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Yêu cầu: Đã hoàn thành chương trình</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #dc3545;">CHƯA THỂ ĐĂNG KÝ</strong> cho đến khi bạn hoàn thành môn học tiên quyết: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else if (course.condition === 'B') {
            // Tiên quyết đã hoàn thành
            conditionDisplay = 'B';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #28a745; font-weight: bold; margin-bottom: 8px; font-size: 13px;">MÔN HỌC TIÊN QUYẾT (B)</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Yêu cầu: Đã hoàn thành chương trình</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #28a745;">ĐÃ HỌC</strong> môn học tiên quyết: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else if (course.condition === 'C') {
            // Song hành
            conditionDisplay = 'C';
            if (prerequisite) {
                conditionTooltip = `
                    <div style="margin-bottom: 10px;">
                        <div style="color: #1976d2; font-weight: bold; margin-bottom: 8px; font-size: 13px;">MÔN HỌC SONG HÀNH</div>
                        <div style="color: #333; font-size: 12px; line-height: 1.6;">
                            <div style="margin-bottom: 4px; font-weight: 600;">${prerequisite.name}</div>
                            <div style="color: #666; font-size: 11px; margin-bottom: 4px;">Mã học phần: <strong style="color: #333;">${prerequisite.code}</strong></div>
                            <div style="color: #666; font-size: 11px;">Có thể đăng ký cùng lúc với môn này</div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #e8e8e8; padding-top: 10px; color: #666; font-size: 11px; line-height: 1.5;">
                        Bạn <strong style="color: #1976d2;">CÓ THỂ ĐĂNG KÝ</strong> môn này cùng lúc với môn: <strong style="color: #333;">${prerequisite.name}</strong>
                    </div>
                `;
            }
        } else {
            // Không có điều kiện tiên quyết
            conditionDisplay = '-';
        }

        const conditionCell = conditionTooltip
            ? `<div class="condition-cell" data-tooltip-content='${conditionTooltip.replace(/'/g, '&apos;')}'>${conditionDisplay}</div>`
            : conditionDisplay;

        const row = $(`
                    <tr data-course-id="${course.id}">
                        <td>${index + 1}</td>
                        <td>${course.code}</td>
                        <td>${course.name}</td>
                        <td>${course.credits}</td>
                        <td>${statusIcon}</td>
                        <td>${conditionCell}</td>
                    </tr>
                `);

        row.on('click', function () {
            selectCourse(course);
        });

        tbody.append(row);
    });

    // Xử lý tooltip
    $('.condition-cell')
        .off('mouseenter mouseleave')
        .on('mouseenter', function (e) {
            const $cell = $(this);
            const tooltipContent = $cell.attr('data-tooltip-content');

            if (!tooltipContent) return;

            // Tooltip
            const $tooltip = $('<div class="tooltip"></div>').html(
                tooltipContent,
            );
            $('body').append($tooltip);

            // Vị trí
            const cellRect = this.getBoundingClientRect();
            const tooltipWidth = 260;
            const tooltipLeft =
                cellRect.left + cellRect.width / 2 - tooltipWidth / 2;
            const tooltipTop = cellRect.top - $tooltip.outerHeight() - 10;

            // Set vị trí
            $tooltip.css({
                position: 'fixed',
                left: tooltipLeft + 'px',
                top: tooltipTop + 'px',
                width: tooltipWidth + 'px',
            });

            // Hiển thị tooltip
            setTimeout(() => $tooltip.addClass('show'), 10);
        })
        .on('mouseleave', function () {
            $('.tooltip').removeClass('show');
            setTimeout(() => $('.tooltip').remove(), 200);
        });
}

// Chọn môn học
function selectCourse(course) {
    selectedCourse = course;
    selectedClass = null;

    // Highlight dòng được chọn
    $('#courseTable tbody tr').removeClass('selected');
    $('#courseTable tbody tr[data-course-id="' + course.id + '"]').addClass(
        'selected',
    );

    // Render lớp học phần
    renderWaitingClasses(course.id);

    // Reset chi tiết
    $('#classDetailContainer').html(`
                <div class="empty-state">
                    <div class="empty-state-icon">📋</div>
                    <p>Chọn một lớp học phần để xem chi tiết</p>
                </div>
            `);
}

// Render lớp học phần chờ đăng ký
function renderWaitingClasses(courseId) {
    const classesForCourse = classes[courseId] || [];
    const tbody = $('#waitingClassBody');
    tbody.empty();

    if (classesForCourse.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="2" class="text-center text-muted" style="padding: 30px;">
                            Không có lớp học phần được mở
                        </td>
                    </tr>
                `);
        return;
    }

    classesForCourse.forEach((cls, index) => {
        const course = courses.find((c) => c.id === courseId);
        const available = cls.slots - cls.registered;

        // Trạng thái lớp học phần
        let statusClass = 'ready';
        let statusText = 'Chờ sinh viên đăng ký';
        let canRegister = true; // Mặc định cho phép đăng ký

        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false; // Không cho phép đăng ký
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false; // Không cho phép đăng ký
        }

        // Lưu trạng thái vào object cls để sử dụng
        cls.statusClass = statusClass;
        cls.statusText = statusText;
        cls.canRegister = canRegister;

        const row = $(`
                    <tr data-class-id="${cls.id}">
                        <td style="text-align: center;">${index + 1}</td>
                        <td style="text-align: left;font-size: 12px;">
                            <div style=color:black;"><strong>${course.name}</strong></div>
                            <div style="color: #505050; margin-top: 4px;">Mã lớp học phần: ${course.code}${cls.id}</div>
                            <div style="color: #505050;">Sĩ số: ${cls.registered}/${cls.slots}</div>
                        </td>
                        <td style="text-align: left;">
                            <span class="status-label ${statusClass}">${statusText}</span>
                        </td>
                    </tr>
                `);

        row.on('click', function () {
            selectClass(courseId, cls.id);
        });

        tbody.append(row);
    });
}

// Chọn lớp học phần
function selectClass(courseId, classId) {
    const cls = classes[courseId].find((c) => c.id === classId);
    selectedClass = { courseId, classId, class: cls };

    // Highlight dòng được chọn
    $('#waitingClassBody tr').removeClass('selected');
    $('#waitingClassBody tr[data-class-id="' + classId + '"]').addClass(
        'selected',
    );

    // Render chi tiết
    renderClassDetail(courseId, cls);
}

// Render chi tiết lớp học phần
function renderClassDetail(courseId, cls) {
    const course = courses.find((c) => c.id === courseId);
    const available = cls.slots - cls.registered;

    // Sử dụng trạng thái từ cls
    let statusClass = cls.statusClass || 'ready';
    let statusText = cls.statusText || 'Chờ sinh viên đăng ký';
    let canRegister = cls.canRegister !== undefined ? cls.canRegister : true;

    // Nếu chưa có trạng thái, tính lại
    if (!cls.statusClass) {
        if (available <= 0) {
            statusClass = 'disabled';
            statusText = 'Đã khóa';
            canRegister = false;
        } else if (cls.registered > cls.slots * 0.5) {
            statusClass = 'waiting';
            statusText = 'Đang lên kế hoạch';
            canRegister = false;
        }
    }

    let html = ``;

    // Hiển thị cảnh báo nếu có thực hành
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="alert-box">
                        Lớp học phần có chia nhóm thực hành, vui lòng chọn lịch cố nhóm.
                    </div>
                    `;
    }

    html += `
                <div style="background-color: #F7F8FA; border-radius: 4px; margin-bottom: 20px;padding: 15px 0;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Trạng thái</div>
                            <div style="font-size: 14px; font-weight: bold;">
                                <span class="status-label ${statusClass}">${statusText}</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Nhóm</div>
                            <div id="selectedGroup" style="font-size: 14px; color: #505050; font-weight: 500;">-</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 12px; color: #505050; margin-bottom: 5px;">Sĩ số tối đa</div>
                            <div style="font-size: 14px; color: #505050; font-weight: 500;">${cls.slots}</div>
                        </div>
                    </div>
                </div>
            `;

    // Hiển thị lý thuyết
    if (cls.theoryClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">A. LỊCH HỌC LÝ THUYẾT (LT)</div>
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th>THỜI GIAN HỌC</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.theoryClasses.forEach((theory, index) => {
            html += `
                        <tr>
                            <td>${theory.day} (${theory.time})</td>
                            <td>${theory.room}</td>
                            <td>X (CS1)</td>
                            <td>X${theory.building}</td>
                            <td>${theory.instructor}</td>
                            <td>${theory.startDate} - ${theory.endDate}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                    </div>
                `;
    }

    // Hiển thị thực hành nếu có
    if (cls.practiceClasses.length > 0) {
        html += `
                    <div class="class-detail">
                        <div class="detail-title">B. LỊCH HỌC THỰC HÀNH (TH)</div>
                        <table class="schedule-detail-table">
                            <thead>
                                <tr>
                                    <th style="width: 60px;">CHỌN</th>
                                    <th style="width: 80px;">NHÓM</th>
                                    <th>LỊCH HỌC</th>
                                    <th>CƠ SỞ</th>
                                    <th>DÃY NHÀ</th>
                                    <th>PHÒNG</th>
                                    <th>GIẢNG VIÊN</th>
                                    <th style="width: 80px;">SĨ SỐ</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

        cls.practiceClasses.forEach((practice, index) => {
            const isFull = practice.registered >= practice.slots;
            html += `
                        <tr style="${isFull ? 'opacity: 0.5; background-color: #f5f5f5;' : ''}">
                            <td><input type="radio" name="practice" value="${index}" ${isFull ? 'disabled' : ''} ${index === 0 && !isFull ? 'checked' : ''}></td>
                            <td>${practice.group}</td>
                            <td>${practice.day}</td>
                            <td>${practice.room}</td>
                            <td>B (CS1)</td>
                            <td>${practice.building}</td>
                            <td>${practice.instructor}</td>
                            <td>${practice.registered}/${practice.slots}</td>
                        </tr>
                    `;
        });

        html += `
                            </tbody>
                        </table>
                    </div>
                `;
    }

    html += `
                <button class="btn-register" onclick="registerClass()" ${!canRegister ? 'disabled' : ''}>
                    ĐĂNG KÝ
                </button>

            `;

    $('#classDetailContainer').html(html);

    // event radio buttons cập nhật số nhóm
    $('input[name="practice"]').on('change', function () {
        const selectedIndex = $(this).val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    });

    // Set nhóm mặc định nếu có radio đã chọn
    const checkedRadio = $('input[name="practice"]:checked');
    if (checkedRadio.length > 0) {
        const selectedIndex = checkedRadio.val();
        const selectedPractice = cls.practiceClasses[selectedIndex];
        if (selectedPractice) {
            $('#selectedGroup').text(selectedPractice.group);
        }
    }
}

// Đăng ký lớp học phần
function registerClass() {
    if (!selectedClass) return;

    const courseId = selectedClass.courseId;
    const course = courses.find((c) => c.id === courseId);
    const cls = selectedClass.class;

    // Kiểm tra lớp đã đăng ký
    if (
        registeredClasses.some(
            (r) => r.courseId === courseId && r.classId === cls.id,
        )
    ) {
        alert('Lớp này đã được đăng ký!');
        return;
    }

    // Kiểm tra nếu có thực hành thì phải chọn nhóm
    if (cls.practiceClasses.length > 0) {
        const practiceChoice = $('input[name="practice"]:checked').val();
        if (practiceChoice === undefined) {
            alert('Vui lòng chọn nhóm thực hành trước khi đăng ký!');
            return;
        }
    }

    // Thêm vào danh sách đã đăng ký
    registeredClasses.push({
        courseId: courseId,
        classId: cls.id,
        course: course,
        class: cls,
        registeredDate: new Date().toLocaleDateString('vi-VN'),
        theoryChoice: 0,
        practiceChoice: $('input[name="practice"]:checked').val() || null,
    });

    // Update bảng đã đăng ký
    renderRegisteredTable();

    // Update lịch biểu
    updateSchedule();

    // Render lại bảng môn học,ẩn môn vừa đăng ký
    renderCourseTable();

    selectedClass = null;
    selectedCourse = null;

    // Bỏ highlight môn học được chọn
    $('#courseTable tbody tr').removeClass('selected');

    // Reset bảng lớp chờ đăng ký về trạng thái ban đầu
    $('#waitingClassBody').html(`
                    <tr>
                        <td colspan="3" class="text-center text-muted" style="padding: 30px;">
                            Chọn một môn học để xem danh sách lớp
                        </td>
                    </tr>
                `);

    // Reset chi tiết về trạng thái ban đầu
    $('#classDetailContainer').html(`
                    <div class="empty-state">
                        <div class="empty-state-icon">📋</div>
                        <p>Chọn một lớp học phần để xem chi tiết</p>
                    </div>
                `);

    alert('Đăng ký lớp học phần thành công!');
}

// Render bảng đã đăng ký
function renderRegisteredTable() {
    const tbody = $('#registeredTableBody');

    if (registeredClasses.length === 0) {
        tbody.html(`
                    <tr>
                        <td colspan="13" class="text-center text-muted" style="padding: 30px;">
                            Chưa có lớp học phần đã đăng ký
                        </td>
                    </tr>
                `);
        return;
    }

    tbody.empty();

    registeredClasses.forEach((reg, index) => {
        const theorySchedule = reg.class.theoryClasses[reg.theoryChoice];
        const practiceSchedule =
            reg.practiceChoice !== null
                ? reg.class.practiceClasses[reg.practiceChoice]
                : null;

        const practiceGroup = practiceSchedule ? practiceSchedule.group : '-';

        const row = $(`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${reg.course.code}</td>
                        <td>${reg.course.name}</td>
                        <td>DHKTPM18A</td>
                        <td>${reg.course.credits}</td>
                        <td>${practiceGroup}</td>
                        <td><span class="status-label ready">Đăng ký mới</span></td>
                        <td>${reg.registeredDate}</td>
                        <td>3,380,000</td>
                        <td>30/05/2025</td>
                        <td>Đã thu</td>
                        <td>Chưa xóa</td>
                        <td>
                            <span class="action-icon view" onclick="viewRegistered(${index})" title="Xem">👁</span>
                            <span class="action-icon delete" onclick="deleteRegistered(${index})" title="Xóa">🗑</span>
                        </td>
                    </tr>
                `);

        tbody.append(row);
    });
}

// Xóa đăng ký
function deleteRegistered(index) {
    if (confirm('Bạn chắc chắn muốn hủy đăng ký lớp này?')) {
        registeredClasses.splice(index, 1);
        renderRegisteredTable();
        updateSchedule();
        // Render lại bảng môn học, hiện lại môn vừa xóa
        renderCourseTable();
    }
}

// Xem đăng ký - Mở modal chi tiết
function viewRegistered(index) {
    const reg = registeredClasses[index];
    const theorySchedule =
        reg.class.theoryClasses.length > 0 ? reg.class.theoryClasses[0] : null;
    const practiceSchedule =
        reg.practiceChoice !== null
            ? reg.class.practiceClasses[reg.practiceChoice]
            : null;

    let modalHtml = `
                <div style="margin-bottom: 20px;">
                    <h4 style="font-weight: 600; color: #333; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">Thông tin chung</h4>
                    <div style="margin-bottom: 10px;">
                        <label style="color: #666; font-weight: 500;">Mã môn học:</label>
                        <div style="color: #333;">${reg.course.code}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <label style="color: #666; font-weight: 500;">Tên môn học:</label>
                        <div style="color: #333;">${reg.course.name}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <label style="color: #666; font-weight: 500;">Lớp học phần:</label>
                        <div style="color: #333;">${reg.class.id}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <label style="color: #666; font-weight: 500;">Tín chỉ:</label>
                        <div style="color: #333;">${reg.course.credits}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <label style="color: #666; font-weight: 500;">Ngày đăng ký:</label>
                        <div style="color: #333;">${reg.registeredDate}</div>
                    </div>
                </div>
            `;

    if (theorySchedule) {
        modalHtml += `
                    <div style="margin-bottom: 20px;">
                        <h4 style="font-weight: 600; color: #333; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">Lịch học lý thuyết</h4>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Ngày - Giờ học:</label>
                            <div style="color: #333;">${theorySchedule.day} - ${theorySchedule.time}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Cơ sở:</label>
                            <div style="color: #333;">${theorySchedule.room}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Phòng:</label>
                            <div style="color: #333;">${theorySchedule.building}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Giảng viên:</label>
                            <div style="color: #333;">${theorySchedule.instructor}</div>
                        </div>
                    </div>
                `;
    }

    if (practiceSchedule) {
        modalHtml += `
                    <div style="margin-bottom: 20px;">
                        <h4 style="font-weight: 600; color: #333; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">Lịch học thực hành - Nhóm ${practiceSchedule.group}</h4>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Ngày - Giờ học:</label>
                            <div style="color: #333;">${practiceSchedule.day}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Cơ sở:</label>
                            <div style="color: #333;">${practiceSchedule.room}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Phòng:</label>
                            <div style="color: #333;">${practiceSchedule.building}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label style="color: #666; font-weight: 500;">Giảng viên:</label>
                            <div style="color: #333;">${practiceSchedule.instructor}</div>
                        </div>
                    </div>
                `;
    }

    openDetailModal('Chi tiết lớp học phần', modalHtml);
}

// Mở modal
function openDetailModal(title, content) {
    const html = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center;" class="modal-overlay" onclick="closeDetailModal(event)">
                    <div style="background: white; border-radius: 8px; padding: 30px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" class="modal-dialog" onclick="event.stopPropagation();">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                            <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #333;" class="modal-title">${title}</h3>
                            <button onclick="closeDetailModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #999; padding: 0; width: 30px; height: 30px;">×</button>
                        </div>
                        <div style="font-size: 14px; line-height: 1.6;" class="modal-body">
                            ${content}
                        </div>
                    </div>
                </div>
            `;

    // Remove old modal if exists
    $('.modal-overlay').remove();

    // Add new modal
    $('body').append(html);
}

// Đóng modal
function closeDetailModal(event) {
    if (event && event.target.classList.contains('modal-overlay')) {
        $('.modal-overlay').remove();
    } else if (!event) {
        $('.modal-overlay').remove();
    }
}

// Khởi tạo lịch biểu
function initScheduleGrid() {
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const sessions = [
        {
            label: 'Sáng <br> (1-6)',
            slots: ['(1-3)', '(4-6)'],
            time: 'morning',
        },
        {
            label: 'Chiều </br> (7-12)',
            slots: ['(7-9)', '(10-12)'],
            time: 'afternoon',
        },
        {
            label: 'Tối </br> (13-16)',
            slots: ['(13-15)', '(16)'],
            time: 'evening',
        },
    ];

    const grid = $('#scheduleGrid');
    grid.empty();

    // Header
    grid.append('<div class="time-slot">Ca</div>');
    days.forEach((day) => {
        grid.append(`<div class="grid-header">${day}</div>`);
    });

    // Cells cho 3 ca, mỗi ca có 2 dòng
    sessions.forEach((session) => {
        // Dòng 1 của ca - hiển thị tên ca đầy đủ và merge 2 dòng
        grid.append(
            `<div class="time-slot" style="grid-row: span 2; display: flex; align-items: center; justify-content: center;">${session.label}</div>`,
        );

        // Dòng 1: Tiết 1-3 (7-9, 13-15)
        days.forEach((day) => {
            grid.append(
                `<div class="schedule-cell empty" data-day="${day}" data-time="${session.time}" data-slot="1"></div>`,
            );
        });

        // Dòng 2: Tiết 4-6 (10-12, 16)
        days.forEach((day) => {
            grid.append(
                `<div class="schedule-cell empty" data-day="${day}" data-time="${session.time}" data-slot="2"></div>`,
            );
        });
    });
}

// Update lịch biểu
function updateSchedule() {
    // Reset tất cả cells - xóa style và hiện lại tất cả
    $('.schedule-cell')
        .removeClass('theory practice online')
        .addClass('empty')
        .html('')
        .css('grid-row', '')
        .show();

    let totalCredits = 0;
    let totalCourses = new Set();

    registeredClasses.forEach((reg) => {
        totalCourses.add(reg.courseId);
        totalCredits += reg.course.credits;

        // Thêm lý thuyết (luôn lấy index 0 vì chỉ có 1 lý thuyết)
        const theorySchedule =
            reg.class.theoryClasses.length > 0
                ? reg.class.theoryClasses[0]
                : null;
        if (theorySchedule) {
            const dayMatch = theorySchedule.day.match(/T(\d)/);
            if (dayMatch) {
                const day = 'T' + dayMatch[1];
                const timeInfo = getTimeAndSlot(theorySchedule.time);

                // Lấy tất cả cells của ca này
                const cells = $(
                    `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"]`,
                );

                // Nếu môn học chiếm cả ca (1-6, 7-12), fill cả 2 dòng và merge
                if (timeInfo.fullSession) {
                    // Chỉ set cho dòng đầu tiên, dùng grid-row span để merge
                    const firstCell = $(
                        `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="1"]`,
                    );
                    if (firstCell.length) {
                        const existing = firstCell.html();
                        if (
                            existing &&
                            existing.trim() !== '' &&
                            !firstCell.hasClass('empty')
                        ) {
                            // Thêm theory vào cell đã có content
                            firstCell.html(
                                existing +
                                    '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                            );
                        } else {
                            firstCell
                                .removeClass('empty')
                                .addClass('theory')
                                .css('grid-row', 'span 2')
                                .html(
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                                );

                            // Ẩn dòng thứ 2
                            const secondCell = $(
                                `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="2"]`,
                            );
                            secondCell.hide();
                        }
                    }
                } else {
                    // Chỉ fill 1 slot
                    const cell = $(
                        `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="${timeInfo.slot}"]`,
                    );
                    if (cell.length) {
                        const existing = cell.html();
                        if (existing && existing.trim() !== '') {
                            // Thêm theory vào cell đã có content
                            cell.html(
                                existing +
                                    '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                            );
                        } else {
                            cell.removeClass('empty')
                                .addClass('theory')
                                .html(
                                    `<div style="text-align: left; padding: 4px 0;">
                                        <p class="schedule-course-code-theory">${reg.course.code}</p>
                                        <p class="schedule-building-theory">${theorySchedule.building}</p>
                                    </div>`,
                                );
                        }
                    }
                }
            }
        }

        // Thêm thực hành (nếu chọn)
        if (reg.practiceChoice !== null) {
            const practiceSchedule =
                reg.class.practiceClasses[reg.practiceChoice];
            if (practiceSchedule) {
                const dayMatch = practiceSchedule.day.match(/Th (\d)/);
                if (dayMatch) {
                    const dayNum = parseInt(dayMatch[1]);
                    const day = 'T' + dayNum;
                    const timeInfo = getTimeAndSlot(practiceSchedule.day);

                    if (timeInfo.fullSession) {
                        // Nếu chiếm cả ca, merge 2 dòng
                        const firstCell = $(
                            `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="1"]`,
                        );
                        if (firstCell.length) {
                            const existing = firstCell.html();
                            if (
                                existing &&
                                existing.trim() !== '' &&
                                !firstCell.hasClass('empty')
                            ) {
                                // Thêm practice vào cell đã có content
                                firstCell.html(
                                    existing +
                                        '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                );
                            } else {
                                firstCell
                                    .removeClass('empty')
                                    .addClass('practice')
                                    .css('grid-row', 'span 2')
                                    .html(
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                    );

                                // Ẩn dòng thứ 2
                                const secondCell = $(
                                    `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="2"]`,
                                );
                                secondCell.hide();
                            }
                        }
                    } else {
                        // Chỉ chiếm 1 slot
                        const cell = $(
                            `.schedule-cell[data-day="${day}"][data-time="${timeInfo.time}"][data-slot="${timeInfo.slot}"]`,
                        );
                        if (cell.length) {
                            const existing = cell.html();
                            if (existing && existing.trim() !== '') {
                                // Thêm practice vào cell đã có content
                                cell.html(
                                    existing +
                                        '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ddd;"></div>' +
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice" >${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                );
                            } else {
                                cell.removeClass('empty')
                                    .addClass('practice')
                                    .html(
                                        `<div style="text-align: left; padding: 4px 0;">
                                            <p class="schedule-course-code-practice">${reg.course.code}</p>
                                            <p class="schedule-building-practice" >${practiceSchedule.building}</p>
                                        </div>`,
                                    );
                            }
                        }
                    }
                }
            }
        }
    });

    // Update counters
    $('#creditCount').text(totalCredits);
    $('#courseCount').text(totalCourses.size);

    // Update mobile schedule view, show active day
    const activeDay = $('.mobile-day-tab.active').data('day') || 2;
    updateMobileSchedule(activeDay);
}

// Xác định thời gian và slot dựa vào chuỗi thời gian
function getTimeAndSlot(timeStr) {
    // Trích xuất số tiết từ chuỗi
    const slotMatch = timeStr.match(/(\d+)\s*->\s*(\d+)/);

    if (slotMatch) {
        const startSlot = parseInt(slotMatch[1]);
        const endSlot = parseInt(slotMatch[2]);

        // Xác định ca và slot
        if (startSlot >= 1 && endSlot <= 6) {
            // Ca sáng
            if (endSlot <= 3) {
                return {
                    time: 'morning',
                    slot: 1,
                    fullSession: false,
                };
            } else if (startSlot >= 4) {
                return {
                    time: 'morning',
                    slot: 2,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'morning',
                    slot: 1,
                    fullSession: true,
                };
            }
        } else if (startSlot >= 7 && endSlot <= 12) {
            // Ca chiều
            if (endSlot <= 9) {
                return {
                    time: 'afternoon',
                    slot: 1,
                    fullSession: false,
                };
            } else if (startSlot >= 10) {
                return {
                    time: 'afternoon',
                    slot: 2,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'afternoon',
                    slot: 1,
                    fullSession: true,
                };
            }
        } else if (startSlot >= 13 && endSlot <= 16) {
            // Ca tối
            if (endSlot <= 15) {
                return {
                    time: 'evening',
                    slot: 1,
                    fullSession: false,
                };
            } else {
                return {
                    time: 'evening',
                    slot: 2,
                    fullSession: false,
                };
            }
        }
    }

    // kiểm tra text
    if (timeStr.includes('Sáng'))
        return { time: 'morning', slot: 1, fullSession: true };
    if (timeStr.includes('Chiều'))
        return { time: 'afternoon', slot: 1, fullSession: true };
    if (timeStr.includes('Tối'))
        return { time: 'evening', slot: 1, fullSession: true };

    return { time: 'morning', slot: 1, fullSession: false };
}

// Xác định loại thời gian
function getTimeType(timeStr) {
    if (timeStr.includes('Sáng') || timeStr.includes('1-6')) return 'morning';
    if (timeStr.includes('Chiều') || timeStr.includes('7-12'))
        return 'afternoon';
    return 'evening';
}

// Gắn sự kiện
function attachEventHandlers() {
    // Tìm kiếm
    $('#searchCourse').on('input', renderCourseTable);

    // Tab switching
    $('.tab-item').on('click', function () {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        renderCourseTable();
    });

    // Mobile day tabs - click to show that day's schedule
    $('.mobile-day-tab').on('click', function () {
        $('.mobile-day-tab').removeClass('active');
        $(this).addClass('active');
        const selectedDay = $(this).data('day');
        updateMobileSchedule(selectedDay);
    });
}

// Render mobile schedule list, Show selected day or all days
function updateMobileSchedule(selectedDay = null) {
    console.log('=== UPDATE MOBILE SCHEDULE ===');
    console.log('Selected Day:', selectedDay);
    console.log('Registered Classes:', registeredClasses);

    const dayNames = {
        2: 'Th 2',
        3: 'Th 3',
        4: 'Th 4',
        5: 'Th 5',
        6: 'Th 6',
        7: 'Th 7',
        8: 'CN',
    };

    // Group all classes by day and date
    const fullScheduleByDay = {}; // all ngày được chọn được highlight
    const scheduleByDay = {}; // lọc bằng chọn ngày

    if (registeredClasses.length === 0) {
        console.log('NO REGISTERED CLASSES!');
        $('#mobileScheduleContent').html(
            '<div style="text-align: center; padding: 30px; color: #999;">Chưa đăng ký lớp học phần nào</div>',
        );
        return;
    }

    registeredClasses.forEach((item, index) => {
        console.log(`Processing item ${index}:`, item);
        const course = item.course;
        const cls = item.class;

        // Process theory classes
        if (cls.theoryClasses && cls.theoryClasses.length > 0) {
            cls.theoryClasses.forEach((theory) => {
                // Match both T2 và Th 2
                const dayMatch = theory.day.match(/T[h]?\s*(\d+|CN)/i);
                if (dayMatch) {
                    const dayNum =
                        dayMatch[1] === 'CN' ? 8 : parseInt(dayMatch[1]);

                    const scheduleItem = {
                        title: course.name,
                        time: theory.time,
                        group: theory.group || '-',
                        room: theory.building,
                        instructor: theory.instructor,
                        type: 'theory',
                    };

                    // Add to full schedule (for highlighting tabs)
                    if (!fullScheduleByDay[dayNum]) {
                        fullScheduleByDay[dayNum] = [];
                    }
                    fullScheduleByDay[dayNum].push(scheduleItem);

                    // Add to filtered schedule if matches selected day
                    if (selectedDay === null || dayNum === selectedDay) {
                        if (!scheduleByDay[dayNum]) {
                            scheduleByDay[dayNum] = [];
                        }
                        scheduleByDay[dayNum].push(scheduleItem);
                    }
                }
            });
        }

        // Process practice classes
        if (cls.practiceClasses && cls.practiceClasses.length > 0) {
            const selectedPracticeIndex = item.practiceChoice;
            if (
                selectedPracticeIndex !== null &&
                selectedPracticeIndex !== undefined
            ) {
                const practice = cls.practiceClasses[selectedPracticeIndex];
                if (practice) {
                    // Match both T3 và Th 3
                    const dayMatch = practice.day.match(/T[h]?\s*(\d+|CN)/i);
                    if (dayMatch) {
                        const dayNum =
                            dayMatch[1] === 'CN' ? 8 : parseInt(dayMatch[1]);

                        const scheduleItem = {
                            title: course.name,
                            time: practice.time,
                            group: practice.group || '-',
                            room: practice.building,
                            instructor: practice.instructor,
                            type: 'practice',
                        };

                        // Add to full schedule (for highlighting tabs)
                        if (!fullScheduleByDay[dayNum]) {
                            fullScheduleByDay[dayNum] = [];
                        }
                        fullScheduleByDay[dayNum].push(scheduleItem);

                        // Add to filtered schedule if matches selected day
                        if (selectedDay === null || dayNum === selectedDay) {
                            if (!scheduleByDay[dayNum]) {
                                scheduleByDay[dayNum] = [];
                            }
                            scheduleByDay[dayNum].push(scheduleItem);
                        }
                    }
                }
            }
        }
    });

    console.log('Full schedule by day:', fullScheduleByDay);
    console.log('Filtered schedule by day:', scheduleByDay);

    // Render all days or selected day
    let html = '';
    const sortedDays = Object.keys(scheduleByDay).sort(
        (a, b) => parseInt(a) - parseInt(b),
    );

    if (sortedDays.length === 0) {
        html =
            '<div style="text-align: center; padding: 30px; color: #999;">Không có lịch học</div>';
    } else {
        sortedDays.forEach((dayNum) => {
            const schedules = scheduleByDay[dayNum];
            const dayName = dayNames[dayNum];

            html += `<div class="mobile-date-header">${dayName}</div>`;

            schedules.forEach((schedule) => {
                html += `
                                <div class="mobile-schedule-card ${schedule.type}">
                                    <div class="mobile-card-title">${schedule.title}</div>
                                    <div class="mobile-card-info">
                                        <div class="mobile-card-info-row">
                                            <span>Tiết :</span>
                                            <span>${schedule.time}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Nhóm :</span>
                                            <span>${schedule.group}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Phòng :</span>
                                            <span>${schedule.room}</span>
                                        </div>
                                        <div class="mobile-card-info-row">
                                            <span>Giảng viên :</span>
                                            <span>${schedule.instructor}</span>
                                        </div>
                                    </div>
                                </div>
                            `;
            });
        });
    }

    console.log('Rendering HTML, length:', html.length);
    $('#mobileScheduleContent').html(html);
    $('#mobileScheduleList').css('display', 'block');

    // Highlight tabs that have schedule (use FULL schedule, not filtered)
    highlightTabsWithSchedule(fullScheduleByDay);

    console.log('=== END UPDATE ===');
}

// Highlight tabs that have classes
function highlightTabsWithSchedule(scheduleByDay) {
    // Reset all tabs to default
    $('.mobile-day-tab').removeClass('has-schedule');

    // Add class to tabs that have schedule
    Object.keys(scheduleByDay).forEach((dayNum) => {
        $(`.mobile-day-tab[data-day="${dayNum}"]`).addClass('has-schedule');
    });
}

// Get current date for a specific day of week
function getCurrentDateForDay(dayOfWeek) {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = CN, 1 = T2, ...
    const targetDay = dayOfWeek === 8 ? 0 : dayOfWeek; // Convert 8 (CN) to 0 (Sunday)

    // Calculate days difference
    let diff = targetDay - currentDay;
    if (diff < 0) diff += 7; // If target day has passed this week, get next week

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + diff);

    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');

    return `${day}/${month}`;
}

$(document).ready(init);

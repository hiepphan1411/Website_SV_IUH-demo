// jQuery and Bootstrap initialization
const $ = window.jQuery;
const bootstrap = window.bootstrap;

// Application state
let registrationState = {
    isRegistered: false,
    selectedSpecialty: null,
    selectedCode: null,
    selectedMajor: 'Công nghệ thông tin',
    selectedFaculty: 'Khoa Công nghệ thông tin',
};

// Specialty data mapping
const specialtyData = {
    'D09.40.01': {
        name: 'Công nghệ phần mềm',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.02': {
        name: 'Hệ thống thông tin',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.03': {
        name: 'Khoa học dữ liệu',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.04': {
        name: 'An toàn thông tin',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
    'D09.40.05': {
        name: 'Trí tuệ nhân tạo',
        major: 'Công nghệ thông tin',
        faculty: 'Khoa Công nghệ thông tin',
        academicYear: '2024 - 2029',
    },
};

// Initialize on document ready
$(function () {
    console.log('[v0] Specialty registration page initialized');

    // Bind event handlers
    bindEventHandlers();

    // Load state from localStorage (optional)
    // loadStateFromStorage();

    // Initialize UI state - Always start with registration form
    updateUIState();
});

// Bind all event handlers
function bindEventHandlers() {
    // Form submission
    $('#specialtyForm').on('submit', function (e) {
        e.preventDefault();
        handleRegistration();
    });

    // Specialty selection change
    $('#specialtySelect').on('change', function () {
        const code = $(this).val();
        console.log('[v0] Specialty selected:', code);

        if (code && specialtyData[code]) {
            const specialty = specialtyData[code];
            console.log('[v0] Specialty details:', specialty);
        }
    });
}

// Handle specialty registration
function handleRegistration() {
    const code = $('#specialtySelect').val();

    if (!code) {
        alert('Vui lòng chọn chuyên ngành');
        return;
    }

    const specialty = specialtyData[code];

    // Show confirmation dialog
    if (
        confirm(
            `Bạn chắc chắn muốn đăng ký chuyên ngành: ${specialty.name} (${code})?\n\nLưu ý: Bạn không thể thay đổi lựa chọn sau khi xác nhận.`,
        )
    ) {
        // Update state
        registrationState.isRegistered = true;
        registrationState.selectedSpecialty = specialty.name;
        registrationState.selectedCode = code;

        // Save to localStorage
        saveStateToStorage();

        // Update UI immediately
        updateUIState();

        console.log('[v0] Registration completed:', registrationState);
    }
}

// Toggle between form and info views
function toggleState() {
    registrationState.isRegistered = false;
    localStorage.removeItem('registrationState');
    updateUIState();
    console.log('[v0] State reset - back to registration form');
}

// Update UI based on registration state
function updateUIState() {
    const formContainer = $('#registrationForm');
    const infoContainer = $('#registrationInfo');
    const warningAlert = $('#warningAlert');
    const infoAlert = $('#infoAlert');

    if (registrationState.isRegistered) {
        // Show info view, hide form
        formContainer.addClass('d-none');
        infoContainer.removeClass('d-none');

        // Show info alert, hide warning alert
        warningAlert.addClass('d-none');
        infoAlert.removeClass('d-none');

        // Populate info display
        $('#displaySpecialty').text(registrationState.selectedSpecialty);
        $('#displayCode').text(registrationState.selectedCode);

        console.log('[v0] UI updated to show registered info');
    } else {
        // Show form view, hide info
        formContainer.removeClass('d-none');
        infoContainer.addClass('d-none');

        // Show warning alert, hide info alert
        warningAlert.removeClass('d-none');
        infoAlert.addClass('d-none');

        // Clear form
        $('#specialtySelect').val('');

        console.log('[v0] UI updated to show registration form');
    }
}

// Save state to localStorage
function saveStateToStorage() {
    try {
        localStorage.setItem(
            'registrationState',
            JSON.stringify(registrationState),
        );
        console.log('[v0] State saved to localStorage');
    } catch (error) {
        console.error('[v0] Error saving state:', error);
    }
}

// Load state from localStorage
function loadStateFromStorage() {
    try {
        const stored = localStorage.getItem('registrationState');
        if (stored) {
            registrationState = JSON.parse(stored);
            console.log(
                '[v0] State loaded from localStorage:',
                registrationState,
            );
        }
    } catch (error) {
        console.error('[v0] Error loading state:', error);
    }
}

// Clear stored data (for development/testing)
function clearStoredData() {
    localStorage.removeItem('registrationState');
    registrationState = {
        isRegistered: false,
        selectedSpecialty: null,
        selectedCode: null,
        selectedMajor: 'Công nghệ thông tin',
        selectedFaculty: 'Khoa Công nghệ thông tin',
    };
    updateUIState();
    console.log('[v0] Stored data cleared');
}

// Get current state (for debugging)
function getState() {
    console.log('[v0] Current state:', registrationState);
    return registrationState;
}

// Simulate registered state (for testing)
function simulateRegistered(code = 'D09.40.01') {
    registrationState.isRegistered = true;
    registrationState.selectedCode = code;
    registrationState.selectedSpecialty = specialtyData[code].name;
    saveStateToStorage();
    updateUIState();
    console.log('[v0] Simulated registration:', registrationState);
}

$(document).ready(function () {
    // Navigation buttons
    $('.nav-buttons button:first-child').click(function () {
        alert('Chuyển sang tuần trước');
    });

    $('.nav-buttons button:nth-child(2)').click(function () {
        alert('Chuyển sang tuần tiếp theo');
    });

    // Legend click
    $('.legend-item').click(function () {
        console.log('Clicked legend item');
    });

    // Month selector
    $('.month-selector button:first-child').click(function () {
        alert('Tháng trước');
    });

    $('.month-selector button:last-child').click(function () {
        alert('Tháng sau');
    });

    // Mini calendar date selection
    $('.mini-calendar td:not(.other-month)').click(function () {
        $('.mini-calendar td').removeClass('today');
        $(this).addClass('today');
    });

    // Event click
    $('.event').click(function () {
        alert('Chi tiết: ' + $(this).find('.event-title').text());
    });

    // Print button
    $('.btn-print').click(function () {
        window.print();
    });
});

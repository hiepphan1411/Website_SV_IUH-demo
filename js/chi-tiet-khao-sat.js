const surveyData = {
  courseName: "Kế toán tài chính",
  courseCode: "DKT021401",
  instructorName: "ThS. Nguyễn Văn A",
  semester: "Đợt 1 HK1 - 2024-2025",
  sections: [
    {
      head: "Khảo sát môn học",
      questions: [
        {
          title: "Chuẩn bị trước khi vào nội dung học phần",
          questions: [
            "Chuẩn đầu ra của học phần được xây dựng rõ ràng và phù hợp với chương trình đào tạo ngành.",
            "Đề cương chi tiết học phần được cung cấp đầy đủ và đúng thời gian.",
            "Nội dung học phần được giới thiệu rõ ràng ngay từ đầu học kỳ.",
          ],
        },
        {
          title: "Quá trình đào tạo trong học phần",
          questions: [
            "Lịch học của học phần được thực hiện đúng kế hoạch đã công bố.",
            "Nội dung giảng dạy bám sát đề cương chi tiết học phần.",
            "Phương pháp giảng dạy giúp người học dễ tiếp thu kiến thức.",
          ],
        },
        {
          title: "Kết quả sau khi hoàn thành học phần",
          questions: [
            "Kiến thức học được đáp ứng chuẩn đầu ra của học phần.",
            "Học phần giúp người học vận dụng kiến thức vào thực tế.",
            "Nội dung học phần có giá trị cho việc học tập và nghề nghiệp sau này.",
          ],
        },
        {
          title: "Cảm nhận chung về môn học",
          questions: [
            "Mức độ hài lòng chung của bạn đối với học phần này.",
            "Khối lượng kiến thức của học phần là phù hợp.",
            "Bạn sẵn sàng giới thiệu học phần này cho sinh viên khác.",
          ],
        },
      ],
    },
    {
      head: "Đánh giá hoạt động giảng dạy của giảng viên",
      questions: [
        {
          title: "Chuẩn bị trước khi giảng dạy",
          questions: [
            "Giảng viên chuẩn bị bài giảng đầy đủ trước mỗi buổi học.",
            "Tài liệu học tập được giảng viên cung cấp rõ ràng và dễ hiểu.",
            "Mục tiêu bài học được giảng viên trình bày cụ thể.",
          ],
        },
        {
          title: "Quá trình giảng dạy",
          questions: [
            "Giảng viên truyền đạt nội dung rõ ràng, dễ hiểu.",
            "Giảng viên sử dụng phương pháp giảng dạy phù hợp với môn học.",
            "Giảng viên khuyến khích sinh viên tham gia trao đổi trong giờ học.",
          ],
        },
        {
          title: "Đánh giá kết quả học tập",
          questions: [
            "Hình thức kiểm tra, đánh giá phản ánh đúng nội dung đã học.",
            "Tiêu chí đánh giá kết quả học tập được công bố rõ ràng.",
            "Việc chấm điểm đảm bảo tính công bằng và khách quan.",
          ],
        },
        {
          title: "Cảm nhận chung về giảng viên",
          questions: [
            "Giảng viên nhiệt tình và có trách nhiệm trong giảng dạy.",
            "Giảng viên sẵn sàng hỗ trợ sinh viên khi cần thiết.",
            "Bạn hài lòng với phong cách giảng dạy của giảng viên.",
          ],
        },
      ],
    },
  ],
};

const responses = {};

function loadSurveyData(data = surveyData) {
  document.getElementById("courseName").textContent = data.courseName;
  document.getElementById("courseCode").textContent =
    `Mã HP: ${data.courseCode}`;
  document.getElementById("instructorName").textContent = data.instructorName;
  document.getElementById("semester").textContent = data.semester;

  renderSurveyContent(data);
}

function renderSurveyContent(data) {
  const container = document.getElementById("surveyContent");
  if (!container) return;

  container.innerHTML = "";

  const sectionLabels = ["A", "B", "C", "D", "E"];
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];

  data.sections.forEach((section, sectionIndex) => {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.className = "content-wrapper";

    //A, B, C...
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "sv-detail-section-header";
    sectionHeader.innerHTML = `
      <div class="sv-detail-section-label">${sectionLabels[sectionIndex] || sectionIndex + 1}</div>
      <div class="sv-detail-section-title">${section.head.toUpperCase()}</div>
    `;
    sectionWrapper.appendChild(sectionHeader);

    let questionNumber = 1;

    //I, II, III...
    section.questions.forEach((subsection, subsectionIndex) => {
      const subsectionDiv = document.createElement("div");
      subsectionDiv.className = "sv-detail-section";

      // Subsection Title
      const subsectionTitle = document.createElement("div");
      subsectionTitle.className = "sv-detail-subsection-title";
      subsectionTitle.textContent = `${romanNumerals[subsectionIndex] || subsectionIndex + 1}. ${subsection.title.toUpperCase()}`;
      subsectionDiv.appendChild(subsectionTitle);

      // Questions
      subsection.questions.forEach((questionText) => {
        const questionId = `q${sectionIndex}_${subsectionIndex}_${questionNumber}`;

        const questionGroup = document.createElement("div");
        questionGroup.className = "sv-detail-question-group";

        questionGroup.innerHTML = `
          <div class="sv-detail-question-text">
            ${questionNumber}. ${questionText}
          </div>
          <div class="sv-detail-rating">
            <span class="sv-detail-rating-label">RẤT KHÔNG HÀI LÒNG</span>
            <div class="sv-detail-rating-buttons">
              <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="1">1</button>
              <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="2">2</button>
              <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="3">3</button>
              <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="4">4</button>
              <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="5">5</button>
            </div>
            <span class="sv-detail-rating-label">RẤT HÀI LÒNG</span>
          </div>
        `;

        subsectionDiv.appendChild(questionGroup);
        questionNumber++;
      });

      sectionWrapper.appendChild(subsectionDiv);
    });

    container.appendChild(sectionWrapper);
  });
}

function setupRatingButtons() {
  const buttons = document.querySelectorAll(".sv-detail-rating-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const question = this.getAttribute("data-question");
      const value = this.getAttribute("data-value");

      const questionButtons = document.querySelectorAll(
        `.sv-detail-rating-btn[data-question="${question}"]`,
      );
      questionButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      responses[question] = value;

      console.log(`[v0] Question ${question} answered with value ${value}`);
    });
  });
}

function setupActionButtons() {
  const draftBtn = document.querySelector(".sv-detail-btn-draft");
  const submitBtn = document.querySelector(".sv-detail-btn-submit");

  if (draftBtn) {
    draftBtn.addEventListener("click", saveDraft);
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", submitSurvey);
  }
}

function saveDraft() {
  const draftData = {
    survey: surveyData,
    responses: responses,
    savedAt: new Date().toLocaleString("vi-VN"),
  };

  localStorage.setItem("surveyDraft", JSON.stringify(draftData));

  alert("Bản nháp đã được lưu thành công!");

  console.log("[v0] Survey draft saved:", draftData);
}

function submitSurvey() {
  // Validate all questions are answered
  const totalQuestions = document.querySelectorAll(
    ".sv-detail-question-group",
  ).length;
  const answeredQuestions = Object.keys(responses).length;

  if (answeredQuestions < totalQuestions) {
    alert(
      `Vui lòng trả lời tất cả các câu hỏi (${answeredQuestions}/${totalQuestions})`,
    );
    return;
  }

  const submitData = {
    survey: surveyData,
    responses: responses,
    submittedAt: new Date().toLocaleString("vi-VN"),
  };

  console.log("[v0] Survey submitted:", submitData);

  alert("Khảo sát đã được gửi thành công! Cảm ơn bạn đã tham gia.");

  localStorage.removeItem("surveyDraft");

  setTimeout(() => {
    window.location.href = "survey-event.html";
  }, 1000);
}

window.setSurveyData = function (data) {
  loadSurveyData(data);
};

window.getSurveyResponses = function () {
  return responses;
};

window.clearResponses = function () {
  Object.keys(responses).forEach((key) => delete responses[key]);
  document
    .querySelectorAll(".sv-detail-rating-btn.active")
    .forEach((btn) => btn.classList.remove("active"));
};

document.addEventListener("DOMContentLoaded", () => {
  loadSurveyData();
  setupRatingButtons();
  setupActionButtons();
});

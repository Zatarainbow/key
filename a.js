// ==UserScript==
// @name         Từ điển unit8
// @namespace    http://tampermonkey.net/
// @version      14.0
// @description  Từ điển unit8.
// @author       Trần Bảo Ngọc
// @match        *://wayground.com*/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/563598/T%E1%BB%AB%20%C4%90i%E1%BB%83n.user.js
// @updateURL https://update.greasyfork.org/scripts/563598/T%E1%BB%AB%20%C4%90i%E1%BB%83n.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 1. Dữ liệu từ vựng
    const vocabularyList = [
  {
    "word": "adamant",
    "meaning": "kiên quyết, khăng khăng"
  },
  {
    "word": "symptom",
    "meaning": "triệu chứng, dấu hiệu"
  },
  {
    "word": "pragmatic response",
    "meaning": "phản ứng thực tế"
  },
  {
    "word": "posit",
    "meaning": "cho rằng, giả định"
  },
  {
    "word": "tenured worker",
    "meaning": "nhân viên lâu năm"
  },
  {
    "word": "survey respondent",
    "meaning": "người trả lời khảo sát"
  },
  {
    "word": "adopt a strategy",
    "meaning": "áp dụng chiến lược"
  },
  {
    "word": "equate to",
    "meaning": "tương đương với"
  },
  {
    "word": "reframe",
    "meaning": "nhìn nhận lại"
  },
  {
    "word": "capitalize on",
    "meaning": "tận dụng, có lợi từ"
  },
  {
    "word": "internal mobility",
    "meaning": "thuyên chuyển nội bộ"
  },
  {
    "word": "side hustles",
    "meaning": "công việc phụ"
  },
  {
    "word": "bolster income",
    "meaning": "tăng thu nhập"
  },
  {
    "word": "financial reserve",
    "meaning": "quỹ dự phòng"
  },
  {
    "word": "tradeoff",
    "meaning": "sự đánh đổi"
  },
  {
    "word": "acutely divided",
    "meaning": "chia rẽ rõ rệt"
  },
  {
    "word": "retention",
    "meaning": "giữ lại (nhân viên, kiến thức)"
  },
  {
    "word": "subside",
    "meaning": "giảm bớt"
  },
  {
    "word": "empowered decision",
    "meaning": "quyết định chủ động"
  },
  {
    "word": "cite",
    "meaning": "trích dẫn"
  },
  {
    "word": "catch-up programs",
    "meaning": "chương trình học bù"
  },
  {
    "word": "constructive path",
    "meaning": "hướng đi tích cực"
  },
  {
    "word": "allocation",
    "meaning": "phân bổ ngay lập tức"
  },
  {
    "word": "stark inequity",
    "meaning": "bất bình đẳng rõ rệt"
  },
  {
    "word": "culture of convenience",
    "meaning": "văn hóa tiện lợi"
  },
  {
    "word": "override",
    "meaning": "lấn át"
  },
  {
    "word": "targets coastal pollution",
    "meaning": "nhắm vào ô nhiễm ven biển"
  },
  {
    "word": "contention",
    "meaning": "gây tranh cãi"
  },
  {
    "word": "entail",
    "meaning": "bao hàm"
  },
  {
    "word": "cognitive setbacks",
    "meaning": "thụt lùi nhận thức"
  },
  {
    "word": "grapple with",
    "meaning": "vật lộn với"
  },
  {
    "word": "consensus",
    "meaning": "đồng thuận"
  },
  {
    "word": "quantify",
    "meaning": "định lượng"
  },
  {
    "word": "notorious",
    "meaning": "nổi tiếng (xấu)"
  },
  {
    "word": "on the premise that",
    "meaning": "dựa trên giả định rằng"
  },
  {
    "word": "deficit",
    "meaning": "sự thiếu hụt"
  },
  {
    "word": "accelerated instruction",
    "meaning": "dạy tăng tốc"
  },
  {
    "word": "digital literacy",
    "meaning": "năng lực số"
  },
  {
    "word": "polarized debate",
    "meaning": "tranh luận phân cực"
  },
  {
    "word": "starkly exposed",
    "meaning": "phơi bày rõ rệt"
  },
  {
    "word": "abundance",
    "meaning": "sự dồi dào"
  },
  {
    "word": "pristine",
    "meaning": "nguyên sơ"
  },
  {
    "word": "immaculate",
    "meaning": "hoàn hảo"
  },
  {
    "word": "verdant",
    "meaning": "xanh tươi"
  },
  {
    "word": "panoramic vistas",
    "meaning": "cảnh toàn cảnh"
  },
  {
    "word": "cascading",
    "meaning": "đổ xuống"
  },
  {
    "word": "clamor",
    "meaning": "ồn ào"
  },
  {
    "word": "immerse oneself in",
    "meaning": "đắm mình vào"
  },
  {
    "word": "jarringly",
    "meaning": "gây sốc, chói tai"
  },
  {
    "word": "detritus",
    "meaning": "rác thải"
  },
  {
    "word": "strewn across",
    "meaning": "vương vãi"
  },
  {
    "word": "stark testament",
    "meaning": "minh chứng rõ ràng"
  },
  {
    "word": "incongruous",
    "meaning": "không phù hợp, khó chịu"
  },
  {
    "word": "splendor",
    "meaning": "vẻ huy hoàng"
  },
  {
    "word": "desecration",
    "meaning": "phá hoại"
  },
  {
    "word": "perplexing (p…)",
    "meaning": "khó hiểu"
  },
  {
    "word": "baffling (b…)",
    "meaning": "khó hiểu"
  },
  {
    "word": "corrosion",
    "meaning": "xói mòn"
  },
  {
    "word": "microplastics",
    "meaning": "vi nhựa"
  },
  {
    "word": "grave threat",
    "meaning": "đe dọa nghiêm trọng"
  },
  {
    "word": "stewardship",
    "meaning": "tinh thần bảo vệ, sự quản lý"
  },
  {
    "word": "dismantle",
    "meaning": "phá hủy"
  },
  {
    "word": "filtration method",
    "meaning": "phương pháp lọc"
  },
  {
    "word": "synthetic compounds",
    "meaning": "hợp chất tổng hợp"
  },
  {
    "word": "scientific rigor",
    "meaning": "tính nghiêm ngặt khoa học"
  },
  {
    "word": "pernicious",
    "meaning": "cực kỳ nguy hại"
  },
  {
    "word": "frenzied era",
    "meaning": "thời kỳ điên cuồng"
  },
  {
    "word": "apprehensive",
    "meaning": "lo lắng, sợ hãi"
  },
  {
    "word": "forego",
    "meaning": "từ bỏ"
  },
  {
    "word": "corroborate",
    "meaning": "chứng thực"
  },
  {
    "word": "impetus",
    "meaning": "động lực"
  },
  {
    "word": "pervasive trepidation",
    "meaning": "nỗi lo lan rộng"
  },
  {
    "word": "concede",
    "meaning": "thừa nhận"
  },
  {
    "word": "complacency",
    "meaning": "tự mãn"
  },
  {
    "word": "pragmatic",
    "meaning": "thực tế"
  },
  {
    "word": "ubiquitous",
    "meaning": "phổ biến khắp nơi"
  },
  {
    "word": "pronounced",
    "meaning": "rõ rệt, nổi bật"
  },
  {
    "word": "risk-averse",
    "meaning": "ngại rủi ro"
  },
  {
    "word": "stagnant",
    "meaning": "trì trệ"
  },
  {
    "word": "leverage",
    "meaning": "nâng cao"
  },
  {
    "word": "secondments",
    "meaning": "biệt phái"
  },
  {
    "word": "side stacking",
    "meaning": "làm nhiều việc phụ"
  },
  {
    "word": "bolster",
    "meaning": "củng cố"
  },
  {
    "word": "income streams",
    "meaning": "nguồn thu"
  },
  {
    "word": "turnover cost",
    "meaning": "chi phí thay người"
  }
];

    // --- HÀM HỖ TRỢ ---
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    // --- CSS STYLING ---
    const style = document.createElement('style');
    style.innerHTML = `
        /* Khung chính (Nút bấm) */
        #glass-dict {
            position: fixed; bottom: 20px; left: 10px;
            width: 45px; height: 45px;

            /* TRONG SUỐT 100% */
            background: transparent;
            backdrop-filter: none;
            border: none;
            box-shadow: none;

            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            overflow: hidden; z-index: 999999;
            font-family: Arial, sans-serif;
        }

        /* Khi rê chuột vào thì mới hiện mờ mờ để biết đường bấm */
        #glass-dict:hover {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 25px;
        }

        /* Khung mở rộng (Vẫn cần nền để đọc chữ) */
        #glass-dict.expanded {
            width: 290px; height: auto; max-height: 55vh;
            background: rgba(255, 255, 255, 0.7); /* Nền khi mở bảng */
            backdrop-filter: blur(10px);
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.3);
        }

        #dict-toggle {
            width: 100%; height: 45px; display: flex; align-items: center;
            justify-content: center; cursor: pointer; font-size: 24px; /* Icon to hơn xíu */
            user-select: none; color: #333;
            /* Đổ bóng cho icon để dễ nhìn trên mọi nền web */
            filter: drop-shadow(0 0 2px rgba(255,255,255,0.8));
        }

        #dict-search {
            width: 85%; margin: 5px auto 10px auto; padding: 8px 12px;
            display: none; border: 1px solid rgba(0,0,0,0.1);
            border-radius: 20px; font-size: 14px; outline: none;
            background: rgba(255,255,255,0.6);
        }
        #glass-dict.expanded #dict-search { display: block; }

        #dict-content {
            display: none; flex-direction: column; max-height: calc(55vh - 100px);
            overflow-y: auto; border-top: 1px solid rgba(0,0,0,0.05);
        }
        #glass-dict.expanded #dict-content { display: flex; }

        .dict-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .dict-table tr { border-bottom: 1px solid rgba(0,0,0,0.05); cursor: pointer; }
        .dict-table td { padding: 12px 10px; color: #111; line-height: 1.4; font-weight: 500; }
        .dict-table tr:active { background-color: rgba(40, 167, 69, 0.6) !important; color: #fff !important; }

        @keyframes flashGreen {
            0% { background-color: #fff; }
            50% { background-color: #d4edda; }
            100% { background-color: #fff; }
        }
        .auto-filled-flash { animation: flashGreen 1s ease; }
    `;
    document.head.appendChild(style);

    // --- UI GENERATION ---
    const container = document.createElement('div');
    container.id = 'glass-dict';

    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'dict-toggle';
    toggleBtn.innerHTML = '';
    container.appendChild(toggleBtn);

    const searchInput = document.createElement('input');
    searchInput.id = 'dict-search';
    searchInput.type = 'text';
    searchInput.placeholder = 'Tìm từ...';
    container.appendChild(searchInput);

    const contentDiv = document.createElement('div');
    contentDiv.id = 'dict-content';

    const table = document.createElement('table');
    table.className = 'dict-table';

    // Hàm điền từ
    function fillAnswer(word) {
        const inputEl = document.querySelector('input.question-input, textarea.question-input, input[type="text"], textarea');
        if (inputEl) {
            inputEl.value = word;
            inputEl.dispatchEvent(new Event('input', { bubbles: true }));
            inputEl.classList.remove('auto-filled-flash');
            void inputEl.offsetWidth;
            inputEl.classList.add('auto-filled-flash');
        }
    }

    function createRow(item, tableEl) {
        const row = document.createElement('tr');
        row.addEventListener('click', () => {
             fillAnswer(item.word);
             row.style.backgroundColor = 'rgba(40, 167, 69, 0.6)';
             setTimeout(() => { row.style.backgroundColor = ''; }, 200);
        });
        const wordCell = document.createElement('td');
        wordCell.innerText = item.word;
        wordCell.style.fontWeight = 'bold';
        wordCell.style.width = '45%';
        const meaningCell = document.createElement('td');
        meaningCell.innerText = item.meaning;
        row.appendChild(wordCell);
        row.appendChild(meaningCell);
        tableEl.appendChild(row);
    }

    function renderTable(filterText = '') {
        table.innerHTML = '';
        const normalizedSearch = removeVietnameseTones(filterText);
        let count = 0;
        vocabularyList.forEach(item => {
            const normalizedMeaning = removeVietnameseTones(item.meaning);
            if (normalizedMeaning.includes(normalizedSearch)) {
                count++;
                createRow(item, table);
            }
        });
        if (count === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="2" style="text-align:center;color:#444;font-style:italic;padding:15px;">Không tìm thấy...</td>';
            table.appendChild(row);
        }
    }

    renderTable();
    contentDiv.appendChild(table);
    container.appendChild(contentDiv);
    document.body.appendChild(container);

    // --- EVENTS UI ---
    let isExpanded = false;
    toggleBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        if (isExpanded) {
            container.classList.add('expanded');
            toggleBtn.innerHTML = '➖';
            toggleBtn.style.fontSize = '18px';
            setTimeout(() => searchInput.focus(), 300);
        } else {
            container.classList.remove('expanded');
            toggleBtn.innerHTML = '';
            toggleBtn.style.fontSize = '24px';
        }
    });

    searchInput.addEventListener('input', (e) => {
        renderTable(e.target.value);
    });

    // --- LOGIC AUTO-FILL (SILENT & INVISIBLE) ---
    let currentQuestionContent = '';

    function getMatchScore(dictionaryMeaning, questionText) {
        const dictWords = removeVietnameseTones(dictionaryMeaning).split(' ').filter(w => w.trim() !== '');
        if (dictWords.length === 0) return 0;
        let matchCount = 0;
        dictWords.forEach(word => {
            if (questionText.includes(word)) matchCount++;
        });
        return matchCount / dictWords.length;
    }

    function checkAndAutoFill() {
        const questionEl = document.getElementById('questionText');
        if (!questionEl) return;

        const rawQuestionText = questionEl.innerText;
        if (rawQuestionText === currentQuestionContent) return;
        currentQuestionContent = rawQuestionText;

        const questionText = removeVietnameseTones(rawQuestionText);
        let candidates = [];

        vocabularyList.forEach(item => {
            const score = getMatchScore(item.meaning, questionText);
            const dictWordCount = item.meaning.split(' ').length;
            let threshold = 0.65;
            if (dictWordCount <= 2) threshold = 0.99;

            if (score >= threshold) {
                candidates.push({ item: item, score: score });
            }
        });

        candidates.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return b.item.meaning.length - a.item.meaning.length;
        });

        if (candidates.length > 0) {
            const bestChoice = candidates[0].item;

            // 1. Chỉ điền đáp án
            fillAnswer(bestChoice.word);

            // 2. Cập nhật dữ liệu vào bảng (âm thầm)
            searchInput.value = bestChoice.meaning;
            table.innerHTML = '';
            candidates.forEach(candidate => {
                createRow(candidate.item, table);
            });

            // 3. KHÔNG BÁO HIỆU GÌ CẢ (Như yêu cầu)
            // Code báo hiệu cũ đã bị xóa bỏ

        } else {
            searchInput.value = '';
            renderTable('');
        }
    }

    const observer = new MutationObserver((mutations) => {
        checkAndAutoFill();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    setTimeout(checkAndAutoFill, 1000);

})();

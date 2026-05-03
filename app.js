// Data Models
const timelineData = [
    { title: "Election Announcement", desc: "The Election Commission of India (ECI) announces the poll dates and Model Code of Conduct comes into effect.", side: "left" },
    { title: "Filing Nominations", desc: "Candidates file their nomination papers along with an affidavit detailing assets and criminal records.", side: "right" },
    { title: "Scrutiny & Withdrawal", desc: "ECI scrutinizes the nominations. Valid candidates have a window to withdraw if they choose to.", side: "left" },
    { title: "Campaigning", desc: "Political parties hold rallies, roadshows, and distribute manifestos. Campaigning stops 48 hours before voting.", side: "right" },
    { title: "Polling Day", desc: "Registered voters cast their votes using Electronic Voting Machines (EVMs) and VVPATs.", side: "left" },
    { title: "Counting & Results", desc: "EVMs are opened, votes are counted under strict security, and the results are declared.", side: "right" }
];

const cheatNotesData = [
    { icon: "shield-alert", title: "Model Code of Conduct (MCC)", points: ["Guidelines issued by ECI to regulate political parties and candidates.", "Ensures free and fair elections.", "Prohibits using official machinery for campaigning.", "Takes effect immediately upon election announcement."] },
    { icon: "cpu", title: "EVM & VVPAT", points: ["EVM: Electronic Voting Machine used for recording votes securely.", "VVPAT: Voter Verifiable Paper Audit Trail.", "VVPAT prints a slip showing the candidate voted for, confirming the vote was cast correctly."] },
    { icon: "landmark", title: "Lok Sabha vs Rajya Sabha", points: ["Lok Sabha (Lower House): Members are directly elected by the public (MPs).", "Rajya Sabha (Upper House): Members are elected by state legislative assemblies.", "Prime Minister is usually from the party with a majority in Lok Sabha."] },
    { icon: "check-circle", title: "NOTA", points: ["None of the Above.", "Allows voters to officially register their rejection of all candidates.", "Does not affect the election result (highest vote-getter still wins)."] },
    { icon: "users", title: "Electoral Foundation", points: ["Universal Adult Franchise: Right to vote for all citizens aged 18+.", "Electoral Roll: Official list of all eligible voters in a constituency.", "Constituency: A geographical area represented by an elected member."] },
    { icon: "gavel", title: "Parliamentary Rules", points: ["Quorum: Minimum members required to conduct proceedings.", "Bill: A proposal for a new law.", "Act: A law passed by Parliament and signed by the President.", "Ordinance: Temporary law issued by the President when Parliament is not in session."] },
    { icon: "bar-chart", title: "Governance & Finance", points: ["Union Budget: Annual financial statement of the government.", "Finance Commission: Recommends fund distribution between Center and States.", "CAG: Audits all government receipts and expenditures.", "NITI Aayog: Premier policy think-tank of the Government of India."] },
    { icon: "scale", title: "Judiciary & Rights", points: ["Supreme Court: Highest judicial court and protector of the Constitution.", "Judicial Review: Power of courts to examine constitutionality of laws.", "Fundamental Rights: Basic human rights guaranteed to all citizens.", "Anti-Defection Law: Prevents members from switching parties after elections."] },
    { icon: "map", title: "State Governance", points: ["Governor: Constitutional head of a state, appointed by the President.", "Chief Minister: Head of the state government.", "High Court: Highest judicial body at the state level.", "Council of Ministers: Assists the CM in state governance."] },
    { icon: "flag", title: "Political Parties", points: ["National Party: Recognized party operating across multiple states.", "Regional Party: Party limited to a particular state or region.", "Coalition Government: Formed by multiple parties joining together.", "Hung Parliament: No single party secures a clear majority."] },
    { icon: "clock", title: "Legislative Sessions", points: ["Question Hour: Time for MPs to ask questions to the government.", "Zero Hour: Time for raising urgent public issues.", "No Confidence Motion: A motion to remove the current government.", "Confidence Motion: A motion to prove the government's majority."] },
    { icon: "scroll", title: "Constitutional Values", points: ["Preamble: The introductory statement of the Constitution.", "Federalism: Division of powers between Center and States.", "Directive Principles: Guidelines for government policy-making.", "Fundamental Duties: Moral obligations expected from every citizen."] },
    { icon: "user-plus", title: "Candidates & Voting", points: ["First-Past-The-Post: Candidate with the highest votes wins.", "Simple Majority: More votes than any other single candidate.", "Absolute Majority: More than 50% of the total house strength.", "Electoral College: The body that elects the President of India."] },
    { icon: "briefcase", title: "Special Categories", points: ["Reservation System: Seats reserved for SC/ST in legislatures.", "Independent Candidate: A person contesting without party affiliation.", "Postal Ballot: Voting facility for service voters and designated groups.", "cVIGIL: ECI app to report MCC violations in real-time."] },
    { icon: "home", title: "Local Government", points: ["Panchayati Raj: System of rural local self-government (73rd Amendment).", "Municipal Corporation: Administers urban areas with 1M+ population.", "Gram Panchayat: The basic unit of local government in villages."] }
];

const quizSets = [
    {
        eci: {
            question: "Which body is responsible for conducting free and fair elections in India?",
            options: ["Supreme Court of India", "Parliament", "Election Commission of India (ECI)", "President of India"],
            correctIndex: 2,
            feedback: "Correct! The Election Commission of India (ECI) is the autonomous constitutional authority."
        },
        evm: {
            question: "What does VVPAT stand for?",
            options: ["Voter Verified Paper Audit Trail", "Voting Validation Print and Track", "Valid Voter Process And Time", "Visual Verification Print Audit Trail"],
            correctIndex: 0,
            feedback: "Spot on! It allows voters to verify that their vote was cast correctly."
        },
        mcc: {
            question: "When does the Model Code of Conduct (MCC) come into effect?",
            options: ["One month before voting", "As soon as election dates are announced", "On polling day", "After the results are declared"],
            correctIndex: 1,
            feedback: "Correct! The MCC kicks in immediately after the ECI announces the poll dates."
        },
        nota: {
            question: "If NOTA gets the highest number of votes, what happens?",
            options: ["Re-election is held", "The candidate with the second highest votes wins", "President's rule is applied", "The constituency remains vacant"],
            correctIndex: 1,
            feedback: "Correct! Currently, NOTA is a right to reject, but it doesn't invalidate the election."
        },
        govt: {
            question: "Who is the head of the Government in India?",
            options: ["President", "Chief Justice", "Prime Minister", "Speaker of Lok Sabha"],
            correctIndex: 2,
            feedback: "Correct! The Prime Minister is the head of the government and the leader of the executive branch."
        }
    },
    {
        eci2: {
            question: "Who appoints the Chief Election Commissioner of India?",
            options: ["Prime Minister", "President of India", "Chief Justice", "Parliament"],
            correctIndex: 1,
            feedback: "Correct! The President of India appoints the Chief Election Commissioner."
        },
        evm2: {
            question: "Are Indian EVMs connected to the internet?",
            options: ["Yes, for live counting", "Yes, for security updates", "No, they are standalone devices", "Only during the final counting phase"],
            correctIndex: 2,
            feedback: "Correct! EVMs are standalone, non-networked devices, which makes them highly secure against remote hacking."
        },
        mcc2: {
            question: "Under the MCC, can ministers combine official government visits with election campaigning?",
            options: ["Yes, always", "Only if approved by the PM", "No, it is strictly prohibited", "Yes, but they must use their own vehicles"],
            correctIndex: 2,
            feedback: "Correct! Official visits cannot be combined with electioneering work."
        },
        nota2: {
            question: "In which year was the NOTA option first introduced in Indian elections?",
            options: ["2001", "2013", "2019", "1998"],
            correctIndex: 1,
            feedback: "Correct! NOTA was first used in state assembly elections in 2013 following a Supreme Court directive."
        },
        govt2: {
            question: "Who is the head of the State in India?",
            options: ["Prime Minister", "President", "Vice President", "Governor"],
            correctIndex: 1,
            feedback: "Correct! The President is the formal head of the State, while the PM is the head of the government."
        }
    },
    {
        ag: {
            question: "Who is the chief legal advisor to the Government of India?",
            options: ["Chief Justice of India", "Attorney General of India", "Solicitor General", "Law Minister"],
            correctIndex: 1,
            feedback: "Correct! The Attorney General is the chief legal advisor to the Union Government."
        },
        cag: {
            question: "Which authority is responsible for auditing the accounts of the Union and State governments?",
            options: ["Finance Commission", "NITI Aayog", "Comptroller and Auditor General (CAG)", "RBI Governor"],
            correctIndex: 2,
            feedback: "Correct! The CAG audits all receipts and expenditures of the government."
        },
        upsc: {
            question: "Which body conducts examinations for appointments to the All India Services?",
            options: ["SSC", "UPSC", "NTA", "ECI"],
            correctIndex: 1,
            feedback: "Correct! The Union Public Service Commission (UPSC) is the premier central recruiting agency."
        },
        cvigil: {
            question: "Which ECI app allows citizens to report violations of the Model Code of Conduct in real-time?",
            options: ["Voter Helpline", "cVIGIL", "Garuda", "Know Your Candidate"],
            correctIndex: 1,
            feedback: "Correct! cVIGIL allows citizens to report misconduct directly to the ECI."
        },
        age: {
            question: "What is the minimum age required for a citizen to vote in India?",
            options: ["21 years", "25 years", "18 years", "16 years"],
            correctIndex: 2,
            feedback: "Correct! Since 1988, the voting age in India has been 18 years."
        }
    },
    {
        rights: {
            question: "Fundamental Rights are guaranteed under which part of the Indian Constitution?",
            options: ["Part I", "Part III", "Part IV", "Part IX"],
            correctIndex: 1,
            feedback: "Correct! Part III of the Constitution contains the Fundamental Rights."
        },
        panchayat: {
            question: "Which amendment formalized the Panchayati Raj system of rural local government?",
            options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "74th Amendment"],
            correctIndex: 2,
            feedback: "Correct! The 73rd Amendment Act, 1992, gave constitutional status to Panchayati Raj."
        },
        review: {
            question: "What is the power of the judiciary to examine the constitutionality of laws called?",
            options: ["Judicial Activism", "Judicial Review", "Legal Audit", "Constitutional Veto"],
            correctIndex: 1,
            feedback: "Correct! Judicial Review allows the courts to strike down unconstitutional laws."
        },
        manifesto: {
            question: "What is the document called that a party publishes before elections containing its promises?",
            options: ["Policy Book", "Constitution", "Manifesto", "White Paper"],
            correctIndex: 2,
            feedback: "Correct! An Election Manifesto outlines a party's proposed policies and programs."
        },
        defection: {
            question: "Which law prevents elected members from switching political parties after being elected?",
            options: ["Anti-Corruption Law", "Anti-Defection Law", "Political Conduct Act", "Tenure Protection Law"],
            correctIndex: 1,
            feedback: "Correct! The Anti-Defection Law is contained in the 10th Schedule of the Constitution."
        }
    },
    {
        speaker: {
            question: "Who is the presiding officer of the Lok Sabha?",
            options: ["President", "Prime Minister", "Speaker", "Vice President"],
            correctIndex: 2,
            feedback: "Correct! The Speaker conducts the proceedings of the Lok Sabha."
        },
        governor: {
            question: "Who appoints the Governor of a State in India?",
            options: ["Chief Minister", "Prime Minister", "President of India", "Chief Justice"],
            correctIndex: 2,
            feedback: "Correct! The President appoints the Governor for each state."
        },
        delimitation: {
            question: "What is the process of redrawing constituency boundaries called?",
            options: ["Demarcation", "Delimitation", "Zoning", "Electoral Mapping"],
            correctIndex: 1,
            feedback: "Correct! Delimitation is done based on census data."
        },
        ballot: {
            question: "Who are entitled to use the 'Postal Ballot' facility?",
            options: ["All citizens", "Only NRIs", "Service voters and designated categories", "Private sector employees"],
            correctIndex: 2,
            feedback: "Correct! Service voters (armed forces) and voters on election duty use postal ballots."
        },
        majority: {
            question: "In the 'First-Past-The-Post' system, who is declared the winner?",
            options: ["One who gets more than 50% votes", "One who gets the highest number of votes", "One who is chosen by the President", "One who wins in two constituencies"],
            correctIndex: 1,
            feedback: "Correct! The candidate with the most votes wins, even if it's less than 50%."
        }
    }
];

let currentQuizSetIndex = 0;
let quizzes = quizSets[currentQuizSetIndex];
let answeredQuizzes = new Set();
let currentScore = 0;

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links li');
const timelineContainer = document.getElementById('timeline-container');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const voiceBtn = document.getElementById('voice-btn');
const quizContainer = document.getElementById('quiz-container');
const notesContainer = document.getElementById('notes-container');

// State
let currentQuizCategory = null;

// Initialization
function init() {
    setupNavigation();
    renderTimeline();
    renderCheatNotes();
    renderAllQuizzes();
    setupChatbot();
    initEligibility();
    initVoterSearch();
}

// Navigation Logic
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show corresponding page
            const pageId = link.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
        });
    });
}

// Render Timeline
function renderTimeline() {
    timelineContainer.innerHTML = timelineData.map(item => `
        <div class="timeline-item ${item.side}">
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Render Cheat Notes
function renderCheatNotes() {
    notesContainer.innerHTML = cheatNotesData.map(note => `
        <div class="note-card">
            <div class="note-header">
                <i data-lucide="${note.icon}"></i>
                <h3>${note.title}</h3>
            </div>
            <div class="note-body">
                <ul>
                    ${note.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Render Quizzes
function renderAllQuizzes() {
    quizContainer.innerHTML = Object.entries(quizzes).map(([key, quiz]) => createQuizHTML(key, quiz)).join('');
    setupQuizInteractions();
}

function createQuizHTML(key, quiz) {
    return `
        <div class="quiz-card" data-category="${key}">
            <div class="quiz-question">${quiz.question}</div>
            <div class="quiz-options">
                ${quiz.options.map((opt, idx) => `
                    <div class="quiz-option" data-index="${idx}" data-category="${key}">${opt}</div>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="feedback-${key}"></div>
        </div>
    `;
}

function setupQuizInteractions() {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            
            // Prevent clicking again if already answered
            if (answeredQuizzes.has(category)) return;
            
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            const quiz = quizzes[category];
            const parentCard = e.target.closest('.quiz-card');
            const feedbackEl = parentCard.querySelector('.quiz-feedback');
            const allOptions = parentCard.querySelectorAll('.quiz-option');

            // Disable all options
            allOptions.forEach(opt => opt.style.pointerEvents = 'none');

            if (selectedIndex === quiz.correctIndex) {
                e.target.classList.add('correct');
                feedbackEl.innerHTML = `✅ ${quiz.feedback}`;
                feedbackEl.style.color = 'var(--secondary)';
                currentScore++;
            } else {
                e.target.classList.add('wrong');
                allOptions[quiz.correctIndex].classList.add('correct');
                feedbackEl.innerHTML = `❌ Incorrect. ${quiz.feedback}`;
                feedbackEl.style.color = '#EF4444';
            }
            feedbackEl.style.display = 'block';
            
            // Record answer
            answeredQuizzes.add(category);
            
            // Check if all quizzes are answered
            if (answeredQuizzes.size === Object.keys(quizzes).length) {
                setTimeout(handleQuizSetCompletion, 1000);
            }
        });
    });
}

function handleQuizSetCompletion() {
    const total = Object.keys(quizzes).length;
    
    // Update Modal Content
    document.getElementById('final-score').innerText = currentScore;
    document.getElementById('total-questions').innerText = total;
    
    const msgEl = document.getElementById('modal-msg');
    if (currentScore === total) {
        msgEl.innerText = "🏆 Perfect Score! You are a true champion of Indian Democracy!";
    } else if (currentScore >= total / 2) {
        msgEl.innerText = "🌟 Great job! You have a strong grasp of the electoral process.";
    } else {
        msgEl.innerText = "📚 Good effort! Keep learning to understand your democracy better.";
    }

    // Show Modal
    const modal = document.getElementById('quiz-modal');
    modal.classList.add('show');

    // Handle Buttons
    document.getElementById('continue-quiz').onclick = () => {
        modal.classList.remove('show');
        loadNextQuizSet();
    };

    document.getElementById('close-modal').onclick = () => {
        modal.classList.remove('show');
    };
}

function loadNextQuizSet() {
    // Move to next set
    currentQuizSetIndex = (currentQuizSetIndex + 1) % quizSets.length;
    quizzes = quizSets[currentQuizSetIndex];
    answeredQuizzes.clear();
    currentScore = 0;
    
    // Re-render
    renderAllQuizzes();
    showToast(`Level ${currentQuizSetIndex + 1} Loaded!`);
}

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Chatbot Logic
function setupChatbot() {
    sendBtn.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatSubmit();
    });

    setupVoiceRecognition();
}

function handleChatSubmit() {
    const text = chatInput.value.trim();
    if (!text) return;

    addChatMessage(text, 'user-message');
    chatInput.value = '';

    // Simulate API delay
    setTimeout(() => {
        processBotResponse(text);
    }, 800);
}

function addChatMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processBotResponse(userText) {
    const lowerText = userText.toLowerCase();
    let response = "";
    let recommendedQuiz = null;

    // Search through our "database" (knowledgeBase)
    let found = false;
    for (const key in knowledgeBase) {
        const item = knowledgeBase[key];
        const searchKeywords = key.split('_').concat(item.title.toLowerCase().split(' '));
        
        // Check if any keyword matches the user input
        if (searchKeywords.some(keyword => keyword.length > 2 && lowerText.includes(keyword))) {
            response = `**${item.title}**: ${item.content} \n\nWould you like to test your knowledge on this?`;
            recommendedQuiz = item.quiz_key;
            found = true;
            break;
        }
    }

    if (!found) {
        if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
            response = "Namaste! I am your Indian Election Assistant. You can ask me about EVMs, the Model Code of Conduct, the Election Commission, NOTA, or the Government.";
        } else {
            response = "I'm sorry, I don't have detailed information on that in my database yet. Try asking about 'EVM', 'Model Code of Conduct', 'ECI', 'NOTA', 'Lok Sabha', or 'Prime Minister'.";
        }
    }

    addChatMessage(response, 'bot-message');
    speakText(response.replace(/\*\*/g, '')); // Remove markdown for speech

    if (recommendedQuiz && found) {
        showQuizRecommendation(recommendedQuiz);
    }
}

function showQuizRecommendation(quizKey) {
    const recDiv = document.createElement('div');
    recDiv.className = 'quiz-recommendation';
    recDiv.innerHTML = `
        <p>Want to test your knowledge on this?</p>
        <button onclick="window.goToQuiz('${quizKey}')">Take Quiz</button>
    `;
    
    // Add inside the last bot message
    const lastMsg = chatMessages.lastChild.querySelector('.message-content');
    lastMsg.appendChild(recDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findQuizInCategory(quizKey) {
    for (let i = 0; i < quizSets.length; i++) {
        if (quizSets[i][quizKey]) {
            return { setIndex: i, quiz: quizSets[i][quizKey] };
        }
        // Also check for partial matches in keys
        const partialKey = Object.keys(quizSets[i]).find(k => k.includes(quizKey));
        if (partialKey) {
            return { setIndex: i, quiz: quizSets[i][partialKey], actualKey: partialKey };
        }
    }
    return null;
}

window.goToQuiz = function(quizKey) {
    const quizInfo = findQuizInCategory(quizKey);
    if (!quizInfo) {
        showToast("Quiz for this topic not found!");
        return;
    }

    // Switch to the correct set if necessary
    if (currentQuizSetIndex !== quizInfo.setIndex) {
        currentQuizSetIndex = quizInfo.setIndex;
        quizzes = quizSets[currentQuizSetIndex];
        answeredQuizzes.clear();
        currentScore = 0;
        renderAllQuizzes();
    }

    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.querySelector('[data-page="quiz"]').classList.add('active');
    document.getElementById('quiz').classList.add('active');
    
    // Highlight specific quiz
    const actualKey = quizInfo.actualKey || quizKey;
    setTimeout(() => {
        const qCard = document.querySelector(`.quiz-card[data-category="${actualKey}"]`);
        if(qCard) {
            qCard.scrollIntoView({behavior: "smooth", block: "center"});
            qCard.style.boxShadow = "0 0 0 4px var(--primary)";
            qCard.style.transform = "scale(1.02)";
            setTimeout(() => {
                qCard.style.boxShadow = "";
                qCard.style.transform = "";
            }, 3000);
        }
    }, 100);
}

// Voice Integration (Web Speech API)
let recognition;
function setupVoiceRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US'; // Can be made dynamic

        recognition.onstart = function() {
            voiceBtn.classList.add('recording');
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;
            handleChatSubmit();
        };

        recognition.onerror = function(event) {
            console.error(event.error);
            voiceBtn.classList.remove('recording');
        };

        recognition.onend = function() {
            voiceBtn.classList.remove('recording');
        };

        voiceBtn.addEventListener('click', () => {
            try {
                recognition.start();
            } catch(e) {
                // If already started
                recognition.stop();
            }
        });
    } else {
        voiceBtn.style.display = 'none'; // Hide if not supported
        console.log("Speech recognition not supported in this browser.");
    }
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        // Stop any current speaking
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        // Optional: Pick a specific voice/language here
        window.speechSynthesis.speak(utterance);
    }
}

// Eligibility Checker Logic
const eligibilityQuestions = [
    { text: "Are you a citizen of India?", type: "critical" },
    { text: "Are you 18 years of age or older as of January 1st of this year?", type: "critical" },
    { text: "Is your name enrolled in the Electoral Roll (Voter List)?", type: "critical" },
    { text: "Do you have a valid Voter ID card (EPIC) or any other ECI-approved identity document?", type: "critical" },
    { text: "Are you free from any legal disqualifications (such as being of unsound mind)?", type: "critical" }
];

let currentEligibilityIndex = 0;
let isUserEligible = true;

function initEligibility() {
    const btns = document.querySelectorAll('.eligibility-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const answer = e.target.getAttribute('data-answer');
            handleEligibilityAnswer(answer);
        });
    });

    document.getElementById('reset-eligibility').addEventListener('click', resetEligibility);
    renderEligibilityQuestion();
}

function renderEligibilityQuestion() {
    const question = eligibilityQuestions[currentEligibilityIndex];
    document.getElementById('eligibility-question').innerText = question.text;
    
    // Update Progress
    const progress = (currentEligibilityIndex / eligibilityQuestions.length) * 100;
    document.getElementById('eligibility-progress').style.width = `${progress}%`;
}

function handleEligibilityAnswer(answer) {
    if (answer === 'no') {
        isUserEligible = false;
        showEligibilityResult(false);
        return;
    }

    currentEligibilityIndex++;

    if (currentEligibilityIndex < eligibilityQuestions.length) {
        renderEligibilityQuestion();
    } else {
        showEligibilityResult(true);
    }
}

function showEligibilityResult(eligible) {
    document.getElementById('eligibility-card').classList.add('hidden');
    document.getElementById('eligibility-progress').style.width = `100%`;
    
    const resultDiv = document.getElementById('eligibility-result');
    const iconDiv = document.getElementById('result-icon');
    const titleEl = document.getElementById('result-title');
    const descEl = document.getElementById('result-desc');

    resultDiv.classList.remove('hidden');

    if (eligible) {
        iconDiv.innerHTML = '<i data-lucide="check-circle" class="success-icon"></i>';
        titleEl.innerText = "You are eligible!";
        descEl.innerText = "Great! You have all the requirements to cast your vote. Make sure to carry your Voter ID on polling day.";
        updateHomeStatus(true);
    } else {
        iconDiv.innerHTML = '<i data-lucide="x-circle" class="fail-icon"></i>';
        titleEl.innerText = "You are not eligible";
        descEl.innerText = "Based on your answers, you may not be eligible to vote at this time. Check with the Election Commission office for more details.";
        updateHomeStatus(false);
    }
    
    lucide.createIcons();
}

function updateHomeStatus(eligible) {
    const statusCard = document.getElementById('status-card');
    const statusText = document.getElementById('status-text');
    const statusIcon = statusCard.querySelector('i');

    if (eligible) {
        statusCard.className = 'status-card eligible';
        statusText.innerHTML = '<strong>Eligible to Vote</strong> &nbsp; ✅';
        statusIcon.setAttribute('data-lucide', 'check-circle');
    } else {
        statusCard.className = 'status-card not-eligible';
        statusText.innerHTML = '<strong>Not Eligible to Vote</strong> &nbsp; ❌';
        statusIcon.setAttribute('data-lucide', 'x-circle');
    }
    lucide.createIcons();
}

window.navToEligibility = function() {
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.querySelector('[data-page="eligibility"]').classList.add('active');
    document.getElementById('eligibility').classList.add('active');
};

window.navToGuide = function() {
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.querySelector('[data-page="guide"]').classList.add('active');
    document.getElementById('guide').classList.add('active');
};

window.navToVoterSearch = function() {
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.querySelector('[data-page="voter-search"]').classList.add('active');
    document.getElementById('voter-search').classList.add('active');
};

function resetEligibility() {
    currentEligibilityIndex = 0;
    isUserEligible = true;
    
    document.getElementById('eligibility-result').classList.add('hidden');
    document.getElementById('eligibility-card').classList.remove('hidden');
    document.getElementById('eligibility-progress').style.width = `0%`;
    
    renderEligibilityQuestion();
}

// Voter List Search Logic
function initVoterSearch() {
    const searchBtn = document.getElementById('voter-search-btn');
    const epicInput = document.getElementById('epic-input');

    if (searchBtn && epicInput) {
        searchBtn.addEventListener('click', handleVoterSearch);
        epicInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleVoterSearch();
        });
    }
}

function handleVoterSearch() {
    const epicInput = document.getElementById('epic-input');
    const resultArea = document.getElementById('voter-result-area');
    const epicNumber = epicInput.value.trim().toUpperCase();

    if (!epicNumber) {
        showToast("Please enter an EPIC number");
        return;
    }

    // Show loading state (briefly)
    resultArea.innerHTML = `
        <div class="voter-initial-msg">
            <div class="loading-spinner"></div>
            <p>Searching electoral roll...</p>
        </div>
    `;

    setTimeout(() => {
        const voter = voterDatabase.find(v => v.epic === epicNumber);
        
        if (voter) {
            renderVoterFound(voter);
            updateHomeVoterStatus(voter.name, true);
        } else {
            renderVoterNotFound(epicNumber);
            updateHomeVoterStatus(epicNumber, false);
        }
    }, 800);
}

function updateHomeVoterStatus(info, found) {
    const statusText = document.getElementById('voter-search-status');
    const ctaCard = document.querySelector('.voter-cta');
    
    if (found) {
        statusText.innerHTML = `<strong>Found:</strong> ${info} &nbsp; ✅`;
        ctaCard.classList.add('verified');
    } else {
        statusText.innerHTML = `<strong>Not Found:</strong> ${info} &nbsp; ❌`;
        ctaCard.classList.remove('verified');
    }
}

function renderVoterFound(voter) {
    const resultArea = document.getElementById('voter-result-area');
    resultArea.innerHTML = `
        <div class="result-card found">
            <div class="result-icon-container">
                <i data-lucide="check-circle"></i>
            </div>
            <div class="result-info">
                <div class="result-header">
                    <h2>Record Found!</h2>
                    <span class="status-badge">Registered</span>
                </div>
                <p>Your name is listed in the official voter list. Here are your details:</p>
                
                <div class="voter-details-grid">
                    <div class="detail-item">
                        <span class="detail-label">Name</span>
                        <span class="detail-value">${voter.name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">EPIC Number</span>
                        <span class="detail-value">${voter.epic}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Age</span>
                        <span class="detail-value">${voter.age}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Constituency</span>
                        <span class="detail-value">${voter.constituency}</span>
                    </div>
                </div>

                <div class="booth-info-box">
                    <div class="booth-header">
                        <i data-lucide="map-pin"></i>
                        <h3>Polling Booth Details</h3>
                    </div>
                    <div class="booth-details">
                        <div class="booth-name">${voter.booth}</div>
                        <div class="booth-location">${voter.location}</div>
                    </div>
                    <a href="https://www.google.com/maps/search/${encodeURIComponent(voter.location)}" target="_blank" class="map-link">
                        <i data-lucide="external-link"></i>
                        View on Map
                    </a>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function renderVoterNotFound(epic) {
    const resultArea = document.getElementById('voter-result-area');
    resultArea.innerHTML = `
        <div class="result-card not-found">
            <div class="result-icon-container">
                <i data-lucide="alert-circle"></i>
            </div>
            <div class="result-info">
                <h2>No Record Found</h2>
                <p>We couldn't find any entry for EPIC <strong>${epic}</strong> in our database.</p>
                <button onclick="document.getElementById('epic-input').focus()" class="secondary-btn">Try Another Number</button>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Run init when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    // Re-initialize icons since we injected HTML dynamically
    lucide.createIcons();
});

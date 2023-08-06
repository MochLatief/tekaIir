const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let avaliableQuestions = []

let questions = [
    {
        question: 'Halo sobat, apa kamu tahu  saat berkendara kita boleh berhenti dimana?',
        choice1: 'Di rest area',
        choice2: 'Sekitar tempat penyebrangan jalan kaki',
        choice3: 'Pada saat tikungan',
        choice4: 'Di depan pintu perkarangan',
        answer: 1,
    },
    {
        question: 'Berdasarkan Pasal 277 UU No 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan, yang mengatur modifikasi kendaraan ber motor bertujuan untuk?',
        choice1: 'Membuat modifikasi kendaraan lebih mudah',
        choice2: 'Mengurangi biaya modifikasi kendaraan',
        choice3: 'Mencegah bahaya dan menyelamatkan keselamatan karena malfungsi aksesoris',
        choice4: 'Memudahkan akses ke bengkel umum kendaraan bermotor',
        answer: 3,
    },
    {
        question:'Tugas jasa raharja yang memberikan santunan pada masyarakat yang mengalami kecelakaan lalulintas berdasarkan UU.No.33 Dan 34 1964 Syarat apa yang terjamin oleh JASA RAHARJA?',
        choice1: 'Percobaan Bunuh diri & Bunuh diri',
        choice2: 'Kecelakaan tunggal Oleh kendaraan pribadi',
        choice3: 'Kecelakaan akibat hewan liar',
        choice4: 'Kecelakaan tunggal yang di karenakan kendaraan umum',
        answer: 4,
    },
    {
        question:'Halo sobat kamu sudah sampai sejauh ini!, Apakah kamu tahu kendaraan yang bermotor memiliki hak utama dalam berlalu lintas?',
        choice1: 'Ambulance yang mengangkut orang sakit',
        choice2: 'Kendaraan Presiden Indonesia',
        choice3: 'Kendaraan pemadam kebakaran',
        choice4: 'Mobil Patroli Polisi',
        answer: 3,
    },
    {
        question:'Haloo, Apakah kamu tahu upaya pemerintah di bidang keselamatan jalan tidak hanya memberikan akses penyediaan angkutan umum tetapi ada banyak lagi yang lain!, Salah satunya adalah..',
        choice1: 'Memberikan rambu lalulintas',
        choice2: 'Pembangunan Prasarana Transportasi laut',
        choice3: 'Fasilitas Perlindungan terhadap pejalan kaki dan pengguna roda dua',
        choice4: 'Pemberian Polisi tidur',
        answer: 3,
    },
    {
        question:'Hai sobat, apakah kamu tahu kita memiliki lebih dari 4 rambu dengan warna berbeda lohh Yaitu Merah, biru, kuning, dan hijau, bertanda apa  warna tersebut?',
        choice1: 'Warna merah=Larangan, Warna biru=Petunjuk, Warna hijau=peringatan, Warna Kuning=perintah',
        choice2: 'Warna merah=Larangan, Warna biru=Peringatan,Warna hijau=Petunjuk,Warna Kuning=perintah',
        choice3: 'Warna merah=Perintah Warna biru=Petunjuk,Warna hijau=peringatan,Warna Kuning=Larangan',
        choice4: 'Warna merah=Larangan, Warna biru=Perintah,Warna hijau=petunjuk,Warna Kuning=peringatan',
        answer: 4,
    },
    {
        question:'Halo sobat cerdas!, Apakah kamu tahu undang undang yang mengatur lalulintas angkutan jalan? Yang mana mengatur dalam keselamatan dan tata cara berkendara, di karenakan kepadatan penggunaan kendaraan bermotor, pemerintah mengeluarkan undang undang',
        choice1: 'Undang-Undang Nomor 22 Tahun 2009.',
        choice2: 'Undang-Undang Nomor 221 Tahun 2019.',
        choice3: 'Undang-Undang Nomor 21 Tahun 2009.',
        choice4: 'Undang-Undang Nomor 22 Tahun 2008',
        answer: 1,
    },
    {
        question:'Kamu pasti tidak asing dengan rambu lalu lintas dan marka jalan, marka jalan berfungsi untuk mengarahkan arus Lalu Lintas dan membatasi daerah kepentingan Lalu Lintas, seperti garis putih yang kita temui di jalan raya, tetapi apakah kamu tahu fungsi rambu lalu lintas?',
        choice1: 'Rambu Lalu Lintas berfungsi sebagai peringatan, larangan, perintah, atau petunjuk bagi Pengguna jalan',
        choice2: 'Rambu Lalu Lintas berfungsi sebagai sarana memahami kondisi jalan raya',
        choice3: 'Rambu Lalu Lintas Berfungsi Menandakan jalanan yang di lewati',
        choice4: 'Rambu Lalu Lintas Berfungsi  Menandakan bahaya kepada pengendara.',
        answer: 1,
    },
    {
        question:'Halo Sobat, Dengan kita mengunakan helm SNI, kita dapat mengurangi cedera hingga 50%, yang mana telah di atur dalam Undang undang, yaitu..',
        choice1: 'Pasal 57 ayat (1) jo ayat (2) UU No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan',
        choice2: 'Pasal 22 ayat(3) Jo ayat (2) UU. No. 22 Tahun 2002 tentang Lalu Lintas dan Angkutan Jalan',
        choice3: 'Pasal 2 ayat(3)  UU. No. 22 Tahun 2002 tentang Lalu Lintas dan Angkutan Jalan',
        choice4: 'Pasal 22 ayat(3) Jo ayat (2) UU. No. 22 Tahun 2000 tentang Lalu Lintas dan Angkutan Jalan',
        answer: 1,
    },
    {
        question:'Apa fungsi APILL?, APILL adalah lampu yang mengendalikan arus lalu lintas yang terpasang di persimpangan jalan, tempat penyeberangan pejalan kaki (zebra cross), dan tempat arus lalu lintas lainnya, terdiri dari 3 warna, merah, kuning dan hijau, apa salah satu fungsi alat tersebut?',
        choice1: 'Fungsi APILL adalah sebagai penghias jalan raya.',
        choice2: 'Fungsi APILL adalah untuk memberikan petunjuk kepada pengendara bahwa mereka harus menekan pedal gas lebih kuat.',
        choice3: 'Fungsi APILL adalah untuk memberikan sinyal kepada pengendara bahwa mereka harus berhenti.',
        choice4: 'Fungsi APILL adalah untuk memberikan waktu kepada pejalan kaki untuk menyeberang jalan dengan aman.',
        answer: 3,
    },
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startQuiz = () => {
    questionCounter = 0
    score = 0
    avaliableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
 
    const questionsIndex = Math.floor(Math.random() * avaliableQuestions.length)
    currentQuestion = avaliableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    avaliableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num =>{
    score += num
    scoreText.innerText = score

}

startQuiz()
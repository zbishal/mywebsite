let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'fcNtHofHqY4',
        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: 'fcNtHofHqY4',
            controls: 0,
            showinfo: 0,
            modestbranding: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    const volumeSlider = document.getElementById('volumeSlider');
    event.target.setVolume(volumeSlider.value);
    volumeSlider.addEventListener('input', () => {
        player.setVolume(volumeSlider.value);
    });

    setTimeout(() => {
        event.target.playVideo();
    }, 3000);

    document.querySelectorAll('.nav-link, .navbar-brand, footer a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTime = player.getCurrentTime();
            sessionStorage.setItem('audioTime', currentTime);
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = link.getAttribute('href');
            }, 300);
        });
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
    const savedTime = sessionStorage.getItem('audioTime');
    if (savedTime && player) {
        player.seekTo(parseFloat(savedTime), true);
        setTimeout(() => {
            player.playVideo();
        }, 3000);
    }

    const quotes = [
        { text: "Sometimes the questions are complicated and the answers are simple, but it takes courage to see the truth in simplicity.", author: "Dr. Seuss" },
        { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
        { text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines.", author: "Mark Twain" },
        { text: "The future belongs to those who believe in the beauty of their dreams, so keep pushing forward and never let doubt hold you back from success.", author: "Eleanor Roosevelt" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts, and perseverance will always lead you to greater heights.", author: "Winston Churchill" },
        { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own, and you know what you know.", author: "Dr. Seuss" },
        { text: "Life is not about finding yourself, it’s about creating yourself, so take every opportunity to shape who you want to be and live the life you imagine.", author: "George Bernard Shaw" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today, so cast aside fear and embrace the possibilities that lie ahead of you.", author: "Franklin D. Roosevelt" },
        { text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better.", author: "Theodore Roosevelt" },
        { text: "In the end, it’s not the years in your life that count. It’s the life in your years, so make every moment vibrant and meaningful in your journey.", author: "Abraham Lincoln" },
        { text: "Do not go where the path may lead, go instead where there is no path and leave a trail for others to follow in pursuit of their own greatness.", author: "Ralph Waldo Emerson" },
        { text: "The best way to predict the future is to create it, so take responsibility for your destiny and build something extraordinary with your own hands.", author: "Peter Drucker" },
        { text: "Happiness is not something ready-made. It comes from your own actions, so choose to act in ways that bring joy to yourself and those around you.", author: "Dalai Lama" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall, because resilience is the true measure of our strength.", author: "Nelson Mandela" },
        { text: "Be the change that you wish to see in the world, for it starts with you taking action and inspiring others to follow in the pursuit of progress.", author: "Mahatma Gandhi" },
        { text: "I have not failed. I've just found 10,000 ways that won't work, and each step brings me closer to the solution that will change everything.", author: "Thomas Edison" },
        { text: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking, and don’t settle until your passion ignites.", author: "Steve Jobs" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us, for our inner strength shapes our entire existence.", author: "Ralph Waldo Emerson" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment one can achieve in their lifetime.", author: "Ralph Waldo Emerson" },
        { text: "We must accept finite disappointment, but never lose infinite hope, for it is the belief in better days that keeps us moving forward through life.", author: "Martin Luther King Jr." },
        { text: "The mind is everything. What you think you become, so guard your thoughts carefully and let them guide you toward a life of purpose and meaning.", author: "Buddha" },
        { text: "There is no passion to be found playing small—in settling for a life that is less than the one you are capable of living—so aim high and dream big.", author: "Nelson Mandela" },
        { text: "If you want to lift yourself up, lift up someone else, because true success comes from building a community where everyone can rise together.", author: "Booker T. Washington" },
        { text: "Don’t judge each day by the harvest you reap but by the seeds that you plant, for the future is built on the small efforts you make today.", author: "Robert Louis Stevenson" },
        { text: "The journey of a thousand miles begins with one step, so take that step today and let it lead you toward the incredible destiny that awaits you.", author: "Lao Tzu" },
        { text: "You miss 100% of the shots you don’t take, so seize every opportunity that comes your way and turn possibilities into realities with bold action.", author: "Wayne Gretzky" },
        { text: "It’s not whether you get knocked down, it’s whether you get up that defines you, so rise every time and let resilience shape your character.", author: "Vince Lombardi" },
        { text: "The way to get started is to quit talking and begin doing, for action is the foundation upon which all great achievements are built over time.", author: "Walt Disney" },
        { text: "Believe you can and you’re halfway there, because confidence in yourself is the first step toward overcoming obstacles and achieving your goals.", author: "Theodore Roosevelt" },
        { text: "Life is what happens when you’re busy making other plans, so embrace the unexpected and find beauty in the chaos that shapes your unique story.", author: "John Lennon" },
        { text: "The only person you are destined to become is the person you decide to be, so choose wisely and craft a life that reflects your deepest desires.", author: "Ralph Waldo Emerson" },
        { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful, so face them head-on and grow stronger each day.", author: "Joshua J. Marine" },
        { text: "You don’t have to see the whole staircase, just take the first step, and trust that each move forward will reveal the path to your destination.", author: "Martin Luther King Jr." },
        { text: "The secret of getting ahead is getting started, so don’t wait for the perfect moment—begin now and let momentum carry you toward your dreams.", author: "Mark Twain" },
        { text: "What we think, we become, so fill your mind with positivity and ambition, and watch how your life transforms into something truly extraordinary.", author: "Buddha" },
        { text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.", author: "Booker T. Washington" },
        { text: "The greatest weapon against stress is our ability to choose one thought over another, so focus on what uplifts you and let go of what weighs you down.", author: "William James" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you, for optimism is the light that guides us through life’s darkest moments.", author: "Walt Whitman" },
        { text: "The real opportunity for success lies within the person and not in the job, so cultivate your own strengths and seize the chances you create.", author: "Zig Ziglar" },
        { text: "It does not matter how slowly you go as long as you do not stop, for persistence is the key that unlocks progress no matter the pace you set.", author: "Confucius" },
        { text: "You are never too old to set another goal or to dream a new dream, so embrace every stage of life as a chance to pursue what truly inspires you.", author: "C.S. Lewis" },
        { text: "The best revenge is massive success, so let your achievements speak louder than any words and rise above those who doubt your potential.", author: "Frank Sinatra" },
        { text: "Opportunities don’t happen, you create them, so take initiative and build the future you want instead of waiting for it to come to you.", author: "Chris Grosser" },
        { text: "The harder the conflict, the more glorious the triumph, because every struggle you overcome adds to the richness of your life’s story.", author: "Thomas Paine" },
        { text: "Courage is not the absence of fear, but the triumph over it, so face your fears boldly and let bravery define the path you choose to walk.", author: "Nelson Mandela" },
        { text: "Dream big and dare to fail, for it’s in pushing beyond your limits that you discover what you’re truly capable of achieving in this life.", author: "Norman Vaughan" },
        { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful in your endeavors.", author: "Albert Schweitzer" },
        { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it—so rewrite that tale.", author: "Jordan Belfort" },
        { text: "Every strike brings me closer to the next home run, so embrace every setback as a step forward in the grand game of life and its pursuits.", author: "Babe Ruth" },
        { text: "Life is either a daring adventure or nothing at all, so take risks and live boldly to make the most of every moment you’re given on this earth.", author: "Helen Keller" },
        { text: "The best preparation for tomorrow is doing your best today, for every effort you make now lays the groundwork for a brighter future ahead.", author: "H. Jackson Brown Jr." },
        { text: "Don’t let yesterday take up too much of today, because living in the past robs you of the chance to shape a better tomorrow with your actions.", author: "Will Rogers" },
        { text: "Your time is limited, so don’t waste it living someone else’s life—follow your heart and let your own vision guide you to your true destiny.", author: "Steve Jobs" },
        { text: "The greatest mistake you can make in life is to be continually fearing you will make one, so let go of fear and embrace the journey fully.", author: "Elbert Hubbard" },
        { text: "The man who has confidence in himself gains the confidence of others, so trust in your abilities and watch how it inspires those around you.", author: "Hasidic Proverb" },
        { text: "Act as if what you do makes a difference. It does, because every small action you take ripples out to affect the world in ways you can’t imagine.", author: "William James" },
        { text: "You must be the change you wish to see in the world, for it begins with your own actions setting an example for others to follow in time.", author: "Mahatma Gandhi" },
        { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance—so embrace life’s shifts with open arms.", author: "Alan Watts" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals, for growth is the true reward of effort.", author: "Zig Ziglar" },
        { text: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer adventures.", author: "Eleanor Roosevelt" },
        { text: "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan, and guess what they have planned for you? Not much.", author: "Jim Rohn" },
        { text: "The biggest risk is not taking any risk, for in a world that’s changing quickly, playing it safe is the surest way to fall behind forever.", author: "Mark Zuckerberg" },
        { text: "Limitations live only in our minds, but if we use our imaginations, our possibilities become limitless and the world opens up before us.", author: "Jamie Paolinetti" },
        { text: "Success seems to be connected with action. Successful people keep moving—they make mistakes, but they don’t quit until they reach their goal.", author: "Conrad Hilton" },
        { text: "The difference between ordinary and extraordinary is that little extra, so push beyond the usual and let your efforts shine above the rest.", author: "Jimmy Johnson" },
        { text: "You can’t connect the dots looking forward; you can only connect them looking backwards, so trust that the dots will align in your future.", author: "Steve Jobs" },
        { text: "The only thing we have to fear is fear itself, so let go of the doubts that hold you back and step boldly into the life you were meant to live.", author: "Franklin D. Roosevelt" },
        { text: "The world is full of magic things, patiently waiting for our senses to grow sharper, so stay curious and let wonder guide your every step.", author: "W.B. Yeats" },
        { text: "Great things are done by a series of small things brought together, so focus on the little steps that build toward your grandest ambitions.", author: "Vincent Van Gogh" },
        { text: "The key to success is to focus on goals, not obstacles, so keep your eyes on the prize and let determination carry you past every challenge.", author: "Unknown" },
        { text: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort that drives you forward.", author: "Franklin D. Roosevelt" },
        { text: "The greatest discovery of all time is that a person can change his future by merely changing his attitude—so start with a positive mindset.", author: "Oprah Winfrey" },
        { text: "Don’t watch the clock; do what it does—keep going, for time moves forward relentlessly, and so should you in pursuit of your aspirations.", author: "Sam Levenson" },
        { text: "The only real mistake is the one from which we learn nothing, so embrace every error as a lesson that brings you closer to your true potential.", author: "Henry Ford" },
        { text: "Life shrinks or expands in proportion to one’s courage, so be brave enough to stretch beyond your comfort zone and see how vast it can become.", author: "Anaïs Nin" },
        { text: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart, so live with love and passion.", author: "Helen Keller" },
        { text: "A journey of a thousand miles must begin with a single step, so take that step today and let it guide you toward a future of endless possibility.", author: "Lao Tzu" },
        { text: "Success is not how high you have climbed, but how you make a positive difference to the world, so aim to leave a legacy of good in your wake.", author: "Roy T. Bennett" },
        { text: "The only thing necessary for the triumph of evil is for good men to do nothing, so stand up and act to shape a world that reflects your values.", author: "Edmund Burke" },
        { text: "You cannot swim for new horizons until you have courage to lose sight of the shore, so let go of the familiar and embrace the unknown ahead.", author: "William Faulkner" },
        { text: "The true sign of intelligence is not knowledge but imagination, so let your creativity lead you to solutions that knowledge alone cannot find.", author: "Albert Einstein" },
        { text: "Do what you can, with what you have, where you are, for the greatest achievements often come from making the most of what’s already in your hands.", author: "Theodore Roosevelt" },
        { text: "The most wasted of all days is one without laughter, so find joy in every moment and let it fuel your spirit through life’s ups and downs.", author: "E.E. Cummings" },
        { text: "If opportunity doesn’t knock, build a door, because the path to success often requires you to create your own openings where none existed before.", author: "Milton Berle" },
        { text: "The price of anything is the amount of life you exchange for it, so invest your time wisely in pursuits that truly matter to your heart and soul.", author: "Henry David Thoreau" },
        { text: "We don’t see things as they are, we see them as we are, so shape your perspective with hope and clarity to transform the world you experience.", author: "Anaïs Nin" },
        { text: "It is during our darkest moments that we must focus to see the light, for resilience shines brightest when we refuse to let despair take hold.", author: "Aristotle Onassis" },
        { text: "The only source of knowledge is experience, so dive into life fully and let every lesson you learn become the foundation for your next adventure.", author: "Albert Einstein" },
        { text: "You can’t use up creativity—the more you use, the more you have, so let your imagination run wild and watch how it multiplies your possibilities.", author: "Maya Angelou" },
        { text: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about—so admire the unseen courage.", author: "Unknown" },
        { text: "Life is short, and it is up to you to make it sweet, so fill your days with passion and purpose to savor every second you’re given on this earth.", author: "Sarah Louise Delany" },
        { text: "The greatest gift you can give someone is your time, because when you give your time, you are giving a portion of your life that you’ll never get back.", author: "Rick Warren" },
        { text: "Don’t count the days, make the days count, for it’s not the length of life that matters but the depth of meaning you bring to each moment you live.", author: "Muhammad Ali" },
        { text: "The only thing worse than being blind is having sight but no vision, so look beyond the present and dream of what could be with unwavering faith.", author: "Helen Keller" },
        { text: "Every moment is a fresh beginning, so seize each chance to start anew and build a life that reflects the best of who you are and what you can be.", author: "T.S. Eliot" }
    ];

    let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    const subtitleElement = document.querySelector('.lead.subtitle');

    function updateQuote() {
        const quote = quotes[currentQuoteIndex];
        subtitleElement.textContent = `"${quote.text}" — ${quote.author}`;
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    updateQuote();
    setInterval(updateQuote, 60000);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(0, 0, 0, 0.7)';
    } else {
        document.querySelector('.navbar').style.background = 'transparent';
    }
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted && player) {
        const savedTime = sessionStorage.getItem('audioTime');
        if (savedTime) {
            player.seekTo(parseFloat(savedTime), true);
            setTimeout(() => {
                player.playVideo();
            }, 3000);
        }
    }
});
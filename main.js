// Portfolio Data
const portfolioItems = [
    { title: "MS Hayley Formal Shoot", category: "Filmed • Edited", id: "6ht8tHB-7FY" },
    { title: "MS 2023 Stranthorpe", category: "Filmed • Edited", id: "jTXHfKt997E" },
    { title: "MS Sarah Location Shoot", category: "Filmed • Edited", id: "60tI_iWF8Pk" },
    { title: "MS Amber Formal", category: "Filmed • Edited", id: "sDNQ5jmiKEk" },
    { title: "Covert Media R34", category: "Edited", id: "U-6c0MFTe7U" },
    { title: "MS 2020 Recap", category: "Filmed • Edited", id: "WfWM2dMyMBo" },
    { title: "MS Uluru Trip", category: "Filmed • Edited", id: "ZBewWjfs2jI" },
    { title: "MS Toowoomba Formal", category: "Filmed • Edited", id: "hXZFJuvSeaw" },
    { title: "MS Paityn City Formal", category: "Filmed • Edited", id: "Rj3hp22yssg" },
    { title: "MS NVSH Formal", category: "Filmed • Edited", id: "IgRutw_DHwU" },
    { title: "MS Goldcoast Group", category: "Filmed • Edited", id: "ax2sES-pAc0" },
    { title: "MS 2020 Cover", category: "Filmed • Edited", id: "oUtl2T4xiiE" },
    { title: "MS 2019 Recap", category: "Filmed • Edited", id: "_quwOv6zKeI" },
    { title: "MS 2019 Cover", category: "Filmed • Edited", id: "zolZcnn-de8" },
    { title: "MS Amalie Location Shoot", category: "Filmed • Edited", id: "qruJADR9lHw" },
];

// Render Portfolio Grid
const grid = document.getElementById('portfolio-grid');

portfolioItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'portfolio-item fade-in-section';
    const thumbUrl = `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`;

    el.innerHTML = `
    <div class="portfolio-link" data-id="${item.id}">
      <img src="${thumbUrl}" alt="${item.title}" loading="lazy">
      <div class="item-info">
        <h3>${item.title}</h3>
        <p>${item.category}</p>
      </div>
    </div>
  `;
    grid.appendChild(el);
});

// Modal Logic
const modal = document.getElementById('video-modal');
const closeModal = document.querySelector('.close-modal');
let player;

// Load YouTube IFrame Player API code asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create global function for API ready
window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('modal-iframe', {
        height: '100%',
        width: '100%',
        videoId: '', // Initial empty video
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'modestbranding': 1,
            'controls': 0,
            'iv_load_policy': 3, // Remove annotations
            'fs': 0 // Remove fullscreen button
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
};

// Handle Player State Change
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        closeVideoModal();
    }
}

// Open Modal
document.querySelectorAll('.portfolio-link').forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.getAttribute('data-id');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        if (player && player.loadVideoById) {
            player.loadVideoById(videoId);
        }
    });
});

// Close Modal
const closeVideoModal = () => {
    modal.classList.remove('show');
    if (player && player.stopVideo) {
        player.stopVideo();
    }
    document.body.style.overflow = '';
};

closeModal.addEventListener('click', closeVideoModal);

// Close on click outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeVideoModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeVideoModal();
    }
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// Header Scroll Effect
const header = document.querySelector('header');
// Removed separate scroll listener

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Custom Scrollbar & Scroll Logic
const scrollbar = document.getElementById('custom-scrollbar');
const thumb = scrollbar.querySelector('.thumb');
let scrollTimeout;
let ticking = false;

function updateScroll() {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Header Logic
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Scrollbar Logic
    const thumbHeight = Math.max((winHeight / docHeight) * winHeight, 50);
    const thumbTop = (scrollTop / (docHeight - winHeight)) * (winHeight - thumbHeight);

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${thumbTop}px`;
    thumb.style.transform = 'none'; // Clear any transform to allow animation

    // Add glitch effect
    thumb.classList.add('glitching');

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        thumb.classList.remove('glitching');
    }, 100);

    ticking = false;
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', updateScroll);
updateScroll(); // Initial call

// Preloader & Decoding Text Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const loaderText = preloader.querySelector('.loader-text');

    // Simulate boot sequence
    setTimeout(() => {
        loaderText.innerText = "LOADING ASSETS...";
    }, 300);

    setTimeout(() => {
        loaderText.innerText = "READY.";
    }, 700);

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Play Hero Video
        const heroVideo = document.getElementById('hero-video');
        if (heroVideo) heroVideo.play();

        startDecoding();
    }, 1000);
});

// RE-WRITING startDecoding to be robust
function startDecoding() {
    const h1 = document.querySelector('.hero h1');
    const text = "Nicholas Brown";
    decodeElement(h1, text);
}

function decodeElement(element, finalText) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    let interval = setInterval(() => {
        element.innerText = finalText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return finalText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= finalText.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const cursor = document.getElementById('cursor');
const form = document.getElementById('contactForm');
const formDone = document.getElementById('formSuccess');

function updateHeader() {
  const scrolled = window.scrollY > 60;
  const heroHeight = document.querySelector('.hero').offsetHeight;
  const inHero = window.scrollY < heroHeight - 80;

  header.classList.toggle('solid', scrolled);
  header.classList.toggle('hero-phase', inHero);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

burger.addEventListener('click', function() {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
});

nav.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    nav.classList.remove('open');
    burger.classList.remove('open');
  });
});

if (cursor) {
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      cursor.classList.add('big');
    });
    el.addEventListener('mouseleave', function() {
      cursor.classList.remove('big');
    });
  });
}

document.querySelectorAll('.ptab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    const target = tab.getAttribute('data-tab');

    document.querySelectorAll('.ptab').forEach(function(t) {
      t.classList.remove('active');
    });
    tab.classList.add('active');

    document.querySelectorAll('.tab-panel').forEach(function(panel) {
      panel.classList.remove('active');
    });
    document.getElementById('tab-' + target).classList.add('active');
  });
});

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.getAttribute('data-delay') || '0');

    setTimeout(function() {
      el.classList.add('in');
    }, delay);

    observer.unobserve(el);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

function generateEnquiryID() {
  const now   = new Date();
  const year  = now.getFullYear().toString().slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day   = String(now.getDate()).padStart(2, '0');
  const hour  = String(now.getHours()).padStart(2, '0');
  const min   = String(now.getMinutes()).padStart(2, '0');
  const rand  = Math.floor(Math.random() * 900 + 100);
  return 'SMT-' + year + month + day + '-' + hour + min + rand;
}

function getFormattedDateTime() {
  const now    = new Date();
  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dayName = days[now.getDay()];
  const date    = now.getDate();
  const month   = months[now.getMonth()];
  const year    = now.getFullYear();
  let   hour    = now.getHours();
  const min     = String(now.getMinutes()).padStart(2, '0');
  const ampm    = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return dayName + ', ' + date + ' ' + month + ' ' + year + ' — ' + hour + ':' + min + ' ' + ampm;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = form.querySelector('[name="name"]').value.trim();
  const phone   = form.querySelector('[name="phone"]').value.trim();
  const email   = form.querySelector('[name="email"]').value.trim();
  const service = form.querySelector('[name="service"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  const enquiryID = generateEnquiryID();
  const dateTime  = getFormattedDateTime();
  const waNumber  = '2349118100328';

  const lines = [
    '╔══════════════════════════╗',
    '✈️  *SUMAYE TRAVELS & TOURS*',
    '     *NEW ENQUIRY RECEIVED*',
    '╚══════════════════════════╝',
    '',
    '🔖 *Enquiry ID*',
    '    `' + enquiryID + '`',
    '',
    '🕐 *Submitted*',
    '    ' + dateTime,
    '',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '👤  *CLIENT INFORMATION*',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '',
    '  *Name*   ›  ' + name,
    '  *Phone*  ›  ' + phone,
    '  *Email*  ›  ' + (email || 'Not provided'),
    '',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '✈️  *SERVICE REQUESTED*',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '',
    '  *Service* ›  ' + service,
    '',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '💬  *CLIENT MESSAGE*',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '',
    '  ' + (message || 'No additional message provided.'),
    '',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
    '📌 *Ref:*     `' + enquiryID + '`',
    '🌐 *Source:*  sumayetravel.com.ng',
    '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬'
  ];

  const text  = lines.join('\n');
  const waURL = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);

  window.open(waURL, '_blank');

  formDone.innerHTML =
    '<div style="text-align:center;padding:4px 0">' +
    '<div style="font-size:2.2rem;margin-bottom:10px">✅</div>' +
    '<strong style="font-size:1rem;display:block;margin-bottom:6px">Enquiry Sent Successfully!</strong>' +
    '<span style="font-size:0.78rem;opacity:0.7;display:block;margin-bottom:14px">Sent to our WhatsApp. We will reply shortly.</span>' +
    '<div style="background:rgba(0,191,255,0.08);border:1.5px solid rgba(0,191,255,0.3);border-radius:10px;padding:12px 18px;display:inline-block">' +
    '<span style="font-size:0.67rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#009FD4;display:block;margin-bottom:4px">Your Enquiry ID</span>' +
    '<strong style="font-size:0.95rem;letter-spacing:0.05em;color:#060E1A">' + enquiryID + '</strong>' +
    '</div>' +
    '<span style="font-size:0.72rem;opacity:0.55;display:block;margin-top:12px">Save this ID for follow-up reference.</span>' +
    '</div>';

  form.style.display = 'none';
  formDone.style.display = 'block';
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

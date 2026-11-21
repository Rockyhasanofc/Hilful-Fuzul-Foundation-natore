(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o={hero:"https://images.pexels.com/photos/38065252/pexels-photo-38065252.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",relief:"https://images.pexels.com/photos/6646902/pexels-photo-6646902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",medical:"https://images.pexels.com/photos/33034061/pexels-photo-33034061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",blood2:"https://images.pexels.com/photos/37553387/pexels-photo-37553387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",children:"https://images.pexels.com/photos/35105938/pexels-photo-35105938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",plantation:"https://images.pexels.com/photos/7944396/pexels-photo-7944396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",hands:"https://images.pexels.com/photos/36319737/pexels-photo-36319737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",donate:"https://images.pexels.com/photos/38429807/pexels-photo-38429807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",story1:"https://images.pexels.com/photos/6994938/pexels-photo-6994938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",story2:"https://images.pexels.com/photos/18303688/pexels-photo-18303688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",story3:"https://images.pexels.com/photos/39523809/pexels-photo-39523809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},u=[{label:"হোম",href:"#home"},{label:"পরিচিতি",href:"#about"},{label:"কার্যক্রম",href:"#projects"}];function m(){return`
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="#home" class="logo">
        <span class="logo-mark">হূ</span>
        <span>হিলফুল ফুজুল ফাউন্ডেশন নাটোর</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>
      <nav class="nav-links" id="navLinks">
        ${u.map(n=>`<a class="nav-link" href="${n.href}">${n.label}</a>`).join("")}
        <a class="nav-link" href="#contact">যোগাযোগ</a>
        <a class="btn btn-primary" href="#donate" style="padding:8px 20px;font-size:14px">সহযোগিতা করুন</a>
      </nav>
    </div>
  </header>`}function f(){return`
  <section class="hero" id="home">
    <div class="hero-bg" style="background-image:url('${o.hero}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="animate-fade-up">
        <span class="hero-badge">🌙 হিলফুল ফুজুল ফাউন্ডেশন নাটোর — মানবতার পাশে</span>
        <h1>মানবতার সেবায় একসাথে,<br>পরিবর্তনের পথে সবাই।</h1>
        <p>সহানুভূতি ও জবাবদিহিতার ওপর গড়া একটি তরুণ সংগঠন। আমরা স্বাস্থ্যসেবা, ত্রাণ বিতরণ, পরিবেশ ও শিক্ষার মাধ্যমে মানুষের পাশে দাঁড়াই।</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#donate">আমাদের সাথে যুক্ত হোন</a>
          <a class="btn btn-outline" href="#projects" style="color:#fff;border-color:#FFFFFFAA">আমাদের কার্যক্রম দেখুন</a>
        </div>
      </div>
    </div>
  </section>`}function g(){return`
  <section class="section" id="about">
    <div class="container">
      <div class="about-strip reveal">
        <div class="about-strip-img" style="background-image:url('${o.hands}')"></div>
        <div class="about-strip-body">
          <span class="eyebrow">আমাদের সম্পর্কে</span>
          <h3>সহানুভূতি ও জবাবদিহিতার ওপর গড়া শিক্ষার্থীদের আন্দোলন।</h3>
          <p>মর্যাদা ও সম্মতির সাথে সেবা — এই নীতিতে হিলফুল ফুজুল ফাউন্ডেশন নাটোর কাজ করে। আমরা বিশ্বাস করি, প্রতিটি মানুষের ন্যায্য অধিকার রক্ষায় একসাথে দাঁড়ালেই পরিবর্তন সম্ভব।</p>
          <a class="btn btn-outline" href="#contact">হিলফুল ফুজুল ফাউন্ডেশন সম্পর্কে আরও জানুন</a>
        </div>
      </div>
    </div>
  </section>`}function b(){return`
  <section class="section section-warm" id="community">
    <div class="container">
      <div class="section-head reveal">
        <h2>কমিউনিটির সাথে যুক্ত মানবিক কাজ</h2>
        <p>আমাদের স্বেচ্ছাসেবকরা নিয়মিত মাঠে থেকে কাজ করেন — ত্রাণ, শিক্ষা, স্বাস্থ্য ও পরিবেশ সব ক্ষেত্রে।</p>
      </div>
      <div class="values-grid">
        <div class="value-card reveal">
          <div class="value-icon">🤝</div>
          <h3>ত্রাণ বিতরণ</h3>
          <p>বন্যা, শীত ও দুর্যোগের সময় দ্রুত ত্রাণ পৌঁছে দেওয়া আমাদের অগ্রাধিকার।</p>
        </div>
        <div class="value-card reveal">
          <div class="value-icon">🌱</div>
          <h3>পরিবেশ ও বৃক্ষরোপণ</h3>
          <p>নিয়মিত বৃক্ষরোপণ ও পরিবেশ সচেতনতা ক্যাম্পেইনের মাধ্যমে সবুজের পাশে দাঁড়াই।</p>
        </div>
        <div class="value-card reveal">
          <div class="value-icon">📚</div>
          <h3>শিক্ষা সহায়তা</h3>
          <p>সুবিধাবঞ্চিত শিক্ষার্থীদের জন্য বই, উপবৃত্তি ও পড়াশোনার সহযোগিতা দান।</p>
        </div>
      </div>
    </div>
  </section>`}function y(){return`
  <section class="section" id="projects">
    <div class="container">
      <div class="section-head reveal">
        <h2>আপনার সহযোগিতা কোথায় যায়</h2>
        <p>প্রতিটি প্রকল্প সরাসরি মানুষের কাছে পৌঁছায় — স্বচ্ছতা ও জবাবদিহিতার সাথে।</p>
      </div>
      <div class="projects-grid">
        <div class="project-card reveal">
          <img class="project-img" src="${o.relief}" alt="জরুরি ত্রাণ বিতরণ — খাদ্য ও জরুরি সামগ্রী">
          <div class="project-body">
            <h3>জরুরি ত্রাণ কার্যক্রম</h3>
            <p>দুর্যোগপ্রবণ এলাকায় খাদ্য, পানি ও জরুরি সামগ্রী বিতরণ।</p>
            <a class="btn btn-ghost" href="#donate" style="padding:8px 16px;font-size:14px">সহযোগিতা করুন</a>
          </div>
        </div>
        <div class="project-card reveal">
          <img class="project-img" src="${o.children}" alt="শিশু শিক্ষা — কুরআন তেলাওয়াতরত শিশু">
          <div class="project-body">
            <h3>শিশু শিক্ষা প্রকল্প</h3>
            <p>সুবিধাবঞ্চিত শিশুদের জন্য শিক্ষা উপকরণ ও পড়াশোনার সহযোগতা।</p>
            <a class="btn btn-ghost" href="#donate" style="padding:8px 16px;font-size:14px">সহযোগিতা করুন</a>
          </div>
        </div>
        <div class="project-card reveal">
          <img class="project-img" src="${o.plantation}" alt="বৃক্ষরোপণ — চারা রোপণ">
          <div class="project-body">
            <h3>সবুজ পরিবেশ প্রকল্প</h3>
            <p>গণবৃক্ষরোপণ ও পরিবেশ সচেতনতা ক্যাম্পেইন আয়োজন।</p>
            <a class="btn btn-ghost" href="#donate" style="padding:8px 16px;font-size:14px">সহযোগিতা করুন</a>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:32px" class="reveal">
        <a class="btn btn-primary" href="#donate">সব প্রকল্প</a>
        <a class="btn btn-outline" href="#donate" style="margin-left:12px">হিলফুল ফুজুল ফাউন্ডেশনকে সহযোগিতা করুন</a>
      </div>
    </div>
  </section>`}function x(){return`
  <section class="section section-mint" id="health">
    <div class="container">
      <div class="health-layout">
        <div class="health-img reveal">
          <img src="${o.medical}" alt="বিনামূল্যে চিকিৎসা ক্যাম্প — রক্তচাপ পরীক্ষা">
        </div>
        <div class="health-text reveal">
          <span class="eyebrow" style="color:var(--primary);font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:1px">স্বাস্থ্যসেবা</span>
          <h3>চিকিৎসা ক্যাম্প ও স্বাস্থ্যসেবা</h3>
          <p>নিয়মিত বিনামূল্যে চিকিৎসা ক্যাম্পের আয়োজন করি গ্রাম ও শহরে। স্বেচ্ছাসেবী চিকিৎসকদের মাধ্যমে স্বাস্থ্যসেবা পৌঁছে দিই প্রান্তিক মানুষের কাছে।</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact">সব ক্যাম্পেইন</a>
            <a class="btn btn-outline" href="#contact">হিলফুল ফুজুল ফাউন্ডেশনের সাথে যোগাযোগ</a>
          </div>
        </div>
      </div>
    </div>
  </section>`}function w(){return`
  <section class="section" id="blood">
    <div class="container">
      <div class="section-head reveal">
        <h2>প্রতিটি ফোঁটাই মূল্যবান।</h2>
        <p>হিলফুল ফুজুল ফাউন্ডেশন নাটোর রক্তদাতা নেটওয়ার্কে যুক্ত হোন অথবা প্রয়োজনে রোগীর জন্য যাচাইকৃত অনুরোধ জমা দিন। রক্তদাতার সম্মতি ও গোপনীয়তাই প্রথম।</p>
      </div>
      <div class="blood-grid">
        <div class="blood-card reveal">
          <div class="blood-drop">🩸</div>
          <h3>রক্তদাতা খুঁজুন</h3>
          <p>যাচাইকৃত রক্তদাতাদের ডেটাবেস থেকে জরুরি রক্ত খুঁজুন।</p>
          <a class="btn btn-ghost" href="#contact" style="margin-top:16px">রক্তদাতা খুঁজুন</a>
        </div>
        <div class="blood-card reveal">
          <div class="blood-drop">✚</div>
          <h3>রক্তদাতা হোন</h3>
          <p>আপনার রক্তের গ্রুপ রেজিস্টার করে যুক্ত হোন আমাদের নেটওয়ার্কে।</p>
          <a class="btn btn-ghost" href="#contact" style="margin-top:16px">রক্তদাতা হোন</a>
        </div>
        <div class="blood-card reveal">
          <div class="blood-drop">📋</div>
          <h3>ক্যাম্পেইন দেখুন</h3>
          <p>আসন্ন রক্তদান ক্যাম্পেইনের তারিখ ও স্থান দেখুন।</p>
          <a class="btn btn-ghost" href="#contact" style="margin-top:16px">ক্যাম্পেইন দেখুন</a>
        </div>
      </div>
      <div style="text-align:center" class="reveal">
        <img src="${o.blood2}" alt="রক্তদান — রক্তের ব্যাগ ও চিকিৎসা সরঞ্জাম" style="max-width:680px;border-radius:var(--radius-lg);box-shadow:var(--shadow-2);margin:0 auto">
      </div>
    </div>
  </section>`}function j(){return`
  <section class="section section-warm" id="involve">
    <div class="container">
      <div class="section-head reveal">
        <h2>মানবতার পাশে দাঁড়ানোর চারটি উপায়</h2>
        <p>আপনি যেভাবেই যুক্ত হতে চান, আমরা স্বাগত জানাই।</p>
      </div>
      <div class="involve-grid">
        <div class="involve-card reveal">
          <div class="involve-icon">👤</div>
          <h3>সদস্য হোন</h3>
          <p>স্বেচ্ছাসেবক হিসেবে যুক্ত হোন।</p>
          <a class="btn btn-ghost" href="#contact" style="margin-top:16px;padding:8px 16px;font-size:14px">সদস্য হোন</a>
        </div>
        <div class="involve-card reveal">
          <div class="involve-icon">📣</div>
          <h3>ক্যাম্পেইন দেখুন</h3>
          <p>চলমান ক্যাম্পেইনগুলো দেখুন।</p>
          <a class="btn btn-ghost" href="#projects" style="margin-top:16px;padding:8px 16px;font-size:14px">ক্যাম্পেইন</a>
        </div>
        <div class="involve-card reveal">
          <div class="involve-icon">📦</div>
          <h3>প্রকল্প দেখুন</h3>
          <p>আমাদের চলমান প্রকল্পসমূহ।</p>
          <a class="btn btn-ghost" href="#projects" style="margin-top:16px;padding:8px 16px;font-size:14px">প্রকল্প</a>
        </div>
        <div class="involve-card reveal">
          <div class="involve-icon">💰</div>
          <h3>সহযোগিতা করুন</h3>
          <p>আর্থিক অবদান রাখুন।</p>
          <a class="btn btn-ghost" href="#donate" style="margin-top:16px;padding:8px 16px;font-size:14px">দান করুন</a>
        </div>
      </div>
    </div>
  </section>`}function $(){return`
  <section class="section section-green-soft" id="stories">
    <div class="container">
      <div class="section-head reveal">
        <h2>মাঠ থেকে গল্প</h2>
        <p>হিলফুল ফুজুল ফাউন্ডেশন নাটোর দলের ঘোষণা, ক্যাম্পেইন প্রতিবেদন ও মানবিক আপডেট।</p>
      </div>
      <div class="stories-grid">
        <div class="story-card reveal">
          <img class="story-img" src="${o.story1}" alt="শীতজনপদে কম্বল বিতরণ">
          <div class="story-body">
            <span class="story-date">১২ নভেম্বর ২০২৬</span>
            <h3>শীতজনপদে কম্বল বিতরণ</h3>
            <p>উত্তরাঞ্চলের তিন জেলায় ৫০০+ পরিবারের কাছে কম্বল পৌঁছে দেওয়া হয়েছে।</p>
          </div>
        </div>
        <div class="story-card reveal">
          <img class="story-img" src="${o.story2}" alt="সবুজ প্রতিশ্রুতি — চারা রোপণ">
          <div class="story-body">
            <span class="story-date">০৫ নভেম্বর ২০২৬</span>
            <h3>সবুজ প্রতিশ্রুতি — ১০০০ গাছ</h3>
            <p>মনসহ স্থানীয় স্কুলে বৃক্ষরোপণ ক্যাম্পেইনে ১০০০ গাছ রোপণ সম্পন্ন।</p>
          </div>
        </div>
        <div class="story-card reveal">
          <img class="story-img" src="${o.story3}" alt="শিক্ষা উপকরণ বিতরণ">
          <div class="story-body">
            <span class="story-date">২৮ অক্টোবর ২০২৬</span>
            <h3>শিক্ষা উপকরণ বিতরণ</h3>
            <p>২০০ শিক্ষার্থীর কাছে বই, খাতা ও স্টেশনারি পৌঁছে দেওয়া হয়েছে।</p>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:32px" class="reveal">
        <a class="btn btn-primary" href="#contact">সব আপডেট</a>
        <a class="btn btn-outline" href="#contact" style="margin-left:12px">হিলফুল ফুজুল ফাউন্ডেশনের সাথে যোগাযোগ</a>
      </div>
    </div>
  </section>`}function L(){return`
  <section class="section" id="donate">
    <div class="container">
      <div class="donate-layout">
        <div class="donate-img reveal">
          <img src="${o.donate}" alt="দান বক্সে অর্থ দান — জাকাত ও সাদাকা">
        </div>
        <div class="donate-text reveal">
          <span class="eyebrow" style="color:var(--primary);font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:1px">সহযোগিতা</span>
          <h3>আপনার সহযোগিতা স্বাস্থ্য, সহায়তা ও আশা নিয়ে আসে</h3>
          <p>আপনার প্রতিটি অবদান সরাসরি মাঠে কাজ করে — কোনো মধ্যস্বত্বভোগী ছাড়া। স্বচ্ছতার সাথে প্রতিটি খরচের হিসাব আমরা প্রকাশ করি।</p>
          <div class="donate-amounts">
            <button class="amount-chip" data-amount="100">৳১০০</button>
            <button class="amount-chip active" data-amount="500">৳৫০০</button>
            <button class="amount-chip" data-amount="1000">৳১,০০০</button>
            <button class="amount-chip" data-amount="5000">৳৫,০০০</button>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact">সাধারণ তহবিলে সহযোগিতা করুন</a>
            <a class="btn btn-outline" href="#projects">আমাদের প্রকল্পে সহযোগিতা করুন</a>
          </div>
        </div>
      </div>
    </div>
  </section>`}function E(){return`
  <section class="section section-warm" id="contact">
    <div class="container">
      <div class="section-head reveal">
        <h2>যোগাযোগ</h2>
        <p>প্রশ্ন বা অংশীদারিত্বের প্রস্তাব? আমাদের সাথে যোগাযোগ করুন।</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info reveal">
          <h3>হিলফুল ফুজুল ফাউন্ডেশন নাটোর</h3>
          <p>মানবতার জন্য একসাথে, পরিবর্তনের পথে সবাই। আপনার যেকোনো প্রশ্ন বা সহযোগিতার জন্য আমরা প্রস্তুত।</p>
          <div class="contact-detail">
            <div class="contact-detail-icon">📍</div>
            <span>লালপুর বাজার, নাটোর</span>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon">📞</div>
            <span>০১৩৩৩৮৭২৬৯১, ০১৭৪৫২৮৫৮২৫</span>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon">✉️</div>
            <span>hilfulfujul@gmail.com</span>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon">🌐</div>
            <span>facebook.com/hilfulfujul</span>
          </div>
        </div>
        <form class="contact-form reveal" id="contactForm">
          <div class="field">
            <label>নাম</label>
            <input type="text" name="name" placeholder="আপনার নাম" required>
          </div>
          <div class="field">
            <label>মোবাইল</label>
            <input type="tel" name="phone" placeholder="মোবাইল নম্বর" required>
          </div>
          <div class="field">
            <label>বার্তা</label>
            <textarea name="message" placeholder="আপনার বার্তা লিখুন" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">পাঠান</button>
        </form>
      </div>
    </div>
  </section>`}function A(){return`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>হিলফুল ফুজুল ফাউন্ডেশন নাটোর</h3>
          <p>মানবতার জন্য একসাথে, পরিবর্তনের পথে সবাই। সহানুভূতি, স্বচ্ছতা ও সেবার আত্মায় কাজ করছি।</p>
        </div>
        <div class="footer-col">
          <h4>সংগঠন</h4>
          <ul>
            <li><a href="#about">পরিচিতি</a></li>
            <li><a href="#projects">কার্যক্রম</a></li>
            <li><a href="#stories">আপডেট</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>যুক্ত হোন</h4>
          <ul>
            <li><a href="#involve">সদস্য হোন</a></li>
            <li><a href="#donate">সহযোগিতা করুন</a></li>
            <li><a href="#blood">রক্তদাতা হোন</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>যোগাযোগ</h4>
          <ul>
            <li><a href="#contact">নাটোর, বাংলাদেশ</a></li>
            <li><a href="tel:01333872691">০১৩৩৩৮৭২৬৯১</a></li>
            <li><a href="mailto:hilfulfujul@gmail.com">ইমেইল</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ২০২৬ হিলফুল ফুজুল ফাউন্ডেশন নাটোর। সর্বস্বত্ব সংরক্ষিত।</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>
    </div>
  </footer>`}function I(){const n=document.getElementById("app");n.innerHTML=`
    ${m()}
    ${f()}
    ${g()}
    ${b()}
    ${y()}
    ${x()}
    ${w()}
    ${j()}
    ${$()}
    ${L()}
    ${E()}
    ${A()}
  `,F()}function F(){const n=document.getElementById("siteHeader");window.addEventListener("scroll",()=>{n.classList.toggle("scrolled",window.scrollY>20)});const c=document.getElementById("navToggle"),i=document.getElementById("navLinks");c.addEventListener("click",()=>i.classList.toggle("open")),i.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>i.classList.remove("open")));const l=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),l.unobserve(s.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(a=>l.observe(a)),document.querySelectorAll(".amount-chip").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".amount-chip").forEach(s=>s.classList.remove("active")),a.classList.add("active")})});const e=document.getElementById("contactForm");e.addEventListener("submit",a=>{a.preventDefault();const s=new FormData(e),d=s.get("name"),p=s.get("phone"),v=s.get("message"),h=encodeURIComponent(`নাম: ${d}
মোবাইল: ${p}

${v}`);window.location.href=`mailto:hilfulfujul@gmail.com?subject=হিলফুল ফুজুল ফাউন্ডেশন নাটোর — যোগাযোগ&body=${h}`,q("ধন্যবাদ! আপনার বার্তা পাঠানো হচ্ছে..."),e.reset()});const t=document.querySelectorAll("section[id]"),r=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{let a="";t.forEach(s=>{window.scrollY>=s.offsetTop-120&&(a=s.id)}),r.forEach(s=>{s.classList.toggle("active",s.getAttribute("href")==="#"+a)})})}function q(n){const c=document.querySelector(".toast");c&&c.remove();const i=document.createElement("div");i.className="toast",i.textContent=n,document.body.appendChild(i),setTimeout(()=>i.remove(),4e3)}I();

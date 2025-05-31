function revealCard(card) {
  card.classList.toggle('flipped');
}

function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  if (tabId === 'home') {
    document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
    document.getElementById('home').style.display = 'block';
  } else if (tabId === 'eventflow') {
    document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
    document.getElementById('eventflow').style.display = 'block';
  } else if (tabId === 'instructions') {
    document.querySelector('.tab-btn:nth-child(3)').classList.add('active');
    document.getElementById('instructions').style.display = 'block';
  } else {
    document.querySelector('.tab-btn:nth-child(4)').classList.add('active');
    document.getElementById('reveal').style.display = 'block';
  }
}

function showRevealTab(tabId) {
  document.querySelectorAll('.reveal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.reveal-content').forEach(tab => tab.style.display = 'none');
  if (tabId === 'second') {
    document.querySelector('.reveal-tab-btn:nth-child(1)').classList.add('active');
    document.getElementById('second').style.display = 'block';
  } else {
    document.querySelector('.reveal-tab-btn:nth-child(2)').classList.add('active');
    document.getElementById('third').style.display = 'block';
  }
}

function surpriseReveal(card) {
  card.classList.toggle('flipped');
  if (card.classList.contains('flipped')) {
    card.querySelector('.card-back').style.animation = 'fadeIn 0.7s';
  }
} 
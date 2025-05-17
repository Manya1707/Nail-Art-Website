function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}

document.getElementById('openFormBtn').onclick=()=>{
  const f=document.getElementById('appointmentForm');
  f.classList.toggle('hidden');
};

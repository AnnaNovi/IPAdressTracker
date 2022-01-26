

export function createModal(){
  const modalBlock = document.createElement('div');
  const modal = document.createElement('div');
  const closeModal = document.createElement('span');
  const errorText = document.createElement('p');
  const formatBtn = document.createElement('button');

  modalBlock.classList = 'modalBlock';
  modalBlock.setAttribute("id", "modalBlock");
  document.body.append(modalBlock);

  modal.classList = 'modal';
  modal.setAttribute("id", "modal");
  modalBlock.append(modal);

  closeModal.classList = 'closeModal';
  closeModal.setAttribute("id", "closeModal");
  closeModal.innerHTML = '&times;';
  modal.append(closeModal);

  errorText.classList = 'errorText';
  errorText.setAttribute("id", "errorText");
  errorText.innerHTML = 'Your IP Address format is incorrect';
  modal.append(errorText);

  formatBtn.classList = 'formatBtn';
  formatBtn.setAttribute("id", "formatBtn");
  formatBtn.innerHTML = 'IP Adress format';
  modal.append(formatBtn);

  closeModal.addEventListener('click', handleCloseModalBtn);
  document.addEventListener('keydown', handleEscape);
  modalBlock.addEventListener('click', handleModalBlockArea);
  formatBtn.addEventListener('click', handleformatBtn);
}

function removeModal(){
  const modalBlock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const formatBtn = document.querySelector('#formatBtn');

  closeModal.removeEventListener('click', handleCloseModalBtn);
  document.removeEventListener('keydown', handleEscape);
  modalBlock.removeEventListener('click', handleModalBlockArea);
  formatBtn.removeEventListener('click', handleformatBtn);

  modalBlock.remove();
}

function handleCloseModalBtn(){
  removeModal();
}

function handleEscape(e){
  if(e.key === 'Escape'){
    document.removeEventListener('keydown', handleEscape);
    removeModal();
  }
}

function handleModalBlockArea(e){
  if((e.target.classList.contains('modalBlock'))){
    removeModal();
  }
}

function handleformatBtn(){

  if(document.querySelector('#formatText')){
    document.querySelector('#formatText').classList.toggle('hide');
    return;
  }
  const formatText = document.createElement('p');
  const modal = document.querySelector('#modal');

  formatText.classList = 'formatText';
  formatText.setAttribute("id", "formatText");
  formatText.innerHTML = 'An IP address is a string of numbers separated by periods. IP addresses are expressed as a set of four numbers — an example address might be 192.158.1.38. Each number in the set can range from 0 to 255. So, the full IP addressing range goes from <b>0.0.0.0</b> to <b>255.255.255.255.</b>';
  modal.append(formatText);
}
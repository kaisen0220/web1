// 衣物数据
const clothingItems = [
    {
        id: 1,
        name: '衣物1',
        description: '优质材质，舒适透气',
        image: 'images/item1.jpg',
        video: 'videos/item1.mp4'
    },
    {
        id: 2,
        name: '衣物2',
        description: '时尚设计，百搭',
        image: 'images/item2.jpg',
        video: 'videos/item2.mp4'
    },
    // 添加更多衣物数据
    {
        id: 3,
        name: '衣物3',
        description: '轻盈设计，适合夏季',
        image: 'images/item3.jpg',
        video: 'videos/item3.mp4'
    },
    // ... (最多添加到10件)
];

const itemsContainer = document.querySelector('.items');
const modal = document.getElementById('item-details-modal');
const modalImage = document.getElementById('detail-image');
const modalTitle = document.getElementById('detail-title');
const modalDescription = document.getElementById('detail-description');
const modalVideo = document.getElementById('detail-video');
const modalVideoSource = document.getElementById('detail-video-source');
const closeModal = document.querySelector('.close-btn');

// 动态生成衣物列表
clothingItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
    `;
    itemDiv.addEventListener('click', () => {
        openModal(item);
    });
    itemsContainer.appendChild(itemDiv);
});

// 打开弹窗查看衣物详情
function openModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalVideoSource.src = item.video;
    modalVideo.load();
    modal.style.display = 'block';
}

// 关闭弹窗
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
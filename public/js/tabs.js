// ここからコードを書いてください
export function setupTabs() {
    //サイドバーのメニュー項目を取得
    const homeLink = document.querySelector('[data-tab="home"]');
    const converterTab = document.querySelector('[data-tab="converter"]');

    //メインコンテンツのセクションを取得
    const homeSection = document.getElementById('home');
    const converterSection = document.getElementById('converter');

    homeSection.classList.remove('hidden');
    converterSection.classList.add('hidden');

    //ホームセクションをクリックしたとき
    homeLink.addEventListener('click',()=>{
        converterSection.classList.add('hidden'); //単位変換セクションを非表示
        homeSection.classList.remove('hidden'); //ホームセクションを表示
    });
    
    //単位変換タブがクリックされたとき
     converterTab.addEventListener('click',()=>{
        homeSection.classList.add('hidden');
        converterSection.classList.remove('hidden');
     });
}

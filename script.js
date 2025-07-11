// ゲーム管理クラス
class GameManager {
    constructor() {
        this.games = [];
        this.init();
    }

    init() {
        this.loadGames();
        this.setupEventListeners();
        this.renderGames();
    }

    // ローカルストレージからゲームデータを読み込み
    loadGames() {
        const savedGames = localStorage.getItem('games');
        if (savedGames) {
            this.games = JSON.parse(savedGames);
        } else {
            // デフォルトのサンプルゲーム
            this.games = [
                {
                    id: 1,
                    title: 'サンプルパズルゲーム',
                    description: '楽しいパズルゲームです。ブロックを組み合わせてスコアを競いましょう！',
                    url: '#',
                    image: '',
                    genre: 'puzzle',
                    date: new Date().toISOString()
                },
                {
                    id: 2,
                    title: 'サンプルアクションゲーム',
                    description: 'スピード感あふれるアクションゲーム。敵を倒してステージを進もう！',
                    url: '#',
                    image: '',
                    genre: 'action',
                    date: new Date().toISOString()
                },
                {
                    id: 3,
                    title: 'サンプルRPG',
                    description: 'ファンタジー世界を冒険するRPGゲーム。キャラクターを育成してクエストに挑戦！',
                    url: '#',
                    image: '',
                    genre: 'rpg',
                    date: new Date().toISOString()
                }
            ];
            this.saveGames();
        }
    }

    // ゲームデータをローカルストレージに保存
    saveGames() {
        localStorage.setItem('games', JSON.stringify(this.games));
    }

    // イベントリスナーの設定
    setupEventListeners() {
        const form = document.getElementById('gameForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addGame();
        });

        // スムーズスクロール
        window.scrollToGames = () => {
            document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
        };
    }

    // 新しいゲームの追加
    addGame() {
        const title = document.getElementById('gameTitle').value;
        const description = document.getElementById('gameDescription').value;
        const url = document.getElementById('gameUrl').value;
        const image = document.getElementById('gameImage').value;
        const genre = document.getElementById('gameGenre').value;

        if (!title || !description || !url) {
            alert('必須項目を入力してください。');
            return;
        }

        const newGame = {
            id: Date.now(),
            title,
            description,
            url,
            image,
            genre,
            date: new Date().toISOString()
        };

        this.games.unshift(newGame);
        this.saveGames();
        this.renderGames();
        this.clearForm();
        
        // 成功メッセージ
        this.showMessage('ゲームが正常に追加されました！', 'success');
    }

    // フォームのクリア
    clearForm() {
        document.getElementById('gameForm').reset();
    }

    // ゲームの表示
    renderGames() {
        const grid = document.getElementById('gamesGrid');
        grid.innerHTML = '';

        if (this.games.length === 0) {
            grid.innerHTML = '<p class="no-games">まだゲームが登録されていません。</p>';
            return;
        }

        this.games.forEach(game => {
            const gameCard = this.createGameCard(game);
            grid.appendChild(gameCard);
        });
    }

    // ゲームカードの作成
    createGameCard(game) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-image">
                ${game.image ? `<img src="${game.image}" alt="${game.title}" style="width: 100%; height: 100%; object-fit: cover;">` : '<i class="fas fa-gamepad"></i>'}
            </div>
            <div class="game-info">
                <h3 class="game-title">${this.escapeHtml(game.title)}</h3>
                <p class="game-description">${this.escapeHtml(game.description)}</p>
                <span class="game-genre">${this.getGenreLabel(game.genre)}</span>
                <button class="play-button" onclick="gameManager.playGame('${game.url}')">
                    <i class="fas fa-play"></i> プレイ
                </button>
            </div>
        `;
        return card;
    }

    // HTMLエスケープ
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ジャンルラベルの取得
    getGenreLabel(genre) {
        const labels = {
            action: 'アクション',
            puzzle: 'パズル',
            rpg: 'RPG',
            strategy: 'ストラテジー',
            arcade: 'アーケード',
            other: 'その他'
        };
        return labels[genre] || 'その他';
    }

    // ゲームをプレイ
    playGame(url) {
        if (url === '#') {
            alert('このゲームはサンプルです。実際のゲームURLを設定してください。');
            return;
        }
        window.open(url, '_blank');
    }

    // メッセージの表示
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        if (type === 'success') {
            messageDiv.style.background = '#4CAF50';
        } else if (type === 'error') {
            messageDiv.style.background = '#f44336';
        } else {
            messageDiv.style.background = '#2196F3';
        }

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// 検索機能
class GameSearch {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.setupSearch();
    }

    setupSearch() {
        // 検索バーの追加
        const searchBar = document.createElement('div');
        searchBar.className = 'search-bar';
        searchBar.innerHTML = `
            <input type="text" id="searchInput" placeholder="ゲームを検索..." class="search-input">
            <select id="genreFilter" class="genre-filter">
                <option value="">すべてのジャンル</option>
                <option value="action">アクション</option>
                <option value="puzzle">パズル</option>
                <option value="rpg">RPG</option>
                <option value="strategy">ストラテジー</option>
                <option value="arcade">アーケード</option>
                <option value="other">その他</option>
            </select>
        `;

        const gamesSection = document.querySelector('.games-section .container');
        gamesSection.insertBefore(searchBar, document.querySelector('.games-grid'));

        // 検索イベントリスナー
        document.getElementById('searchInput').addEventListener('input', () => this.filterGames());
        document.getElementById('genreFilter').addEventListener('change', () => this.filterGames());

        // 検索バーのスタイル
        const style = document.createElement('style');
        style.textContent = `
            .search-bar {
                display: flex;
                gap: 20px;
                margin-bottom: 40px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .search-input, .genre-filter {
                padding: 12px;
                border: 2px solid #e1e5e9;
                border-radius: 8px;
                font-size: 1rem;
                min-width: 200px;
            }
            .search-input:focus, .genre-filter:focus {
                outline: none;
                border-color: #667eea;
            }
            .no-games {
                text-align: center;
                font-size: 1.2rem;
                color: #666;
                padding: 40px;
            }
        `;
        document.head.appendChild(style);
    }

    filterGames() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const genreFilter = document.getElementById('genreFilter').value;

        const filteredGames = this.gameManager.games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                                game.description.toLowerCase().includes(searchTerm);
            const matchesGenre = !genreFilter || game.genre === genreFilter;
            return matchesSearch && matchesGenre;
        });

        this.renderFilteredGames(filteredGames);
    }

    renderFilteredGames(games) {
        const grid = document.getElementById('gamesGrid');
        grid.innerHTML = '';

        if (games.length === 0) {
            grid.innerHTML = '<p class="no-games">検索条件に一致するゲームが見つかりません。</p>';
            return;
        }

        games.forEach(game => {
            const gameCard = this.gameManager.createGameCard(game);
            grid.appendChild(gameCard);
        });
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    window.gameManager = new GameManager();
    new GameSearch(window.gameManager);
});

// スムーズスクロール用のユーティリティ関数
function smoothScrollTo(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

// PWA対応のサービスワーカー登録
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully');
            })
            .catch(error => {
                console.log('Service Worker registration failed');
            });
    });
}
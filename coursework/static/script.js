const serverUrl = 'http://127.0.0.1:8080';

// Прив'язуємо події до кнопок
document.getElementById('searchButton').addEventListener('click', searchHandler); // Пошук
document.getElementById('adminButton').addEventListener('click', toggleAdminMode); // Переключення на адмінку
document.getElementById('addButton').addEventListener('click', addDocumentHandler); // Додати документ
document.getElementById('deleteButton').addEventListener('click', deleteDocumentHandler); // Видалити документ

/**
 * Пошук документів
 */
async function searchHandler() {
    const term = document.getElementById('searchTerm').value.trim();
    const response = await sendRequest(`SEARCH ${term}`);
    const resultContainer = document.getElementById('resultContent');
    resultContainer.innerHTML = '';

    // Відображення знайдених документів
    if (response)
    {
        response.split('\n').filter(Boolean).forEach((result, index) => {
            const resultBlock = document.createElement('div');
            resultBlock.className = 'result-block';
            resultBlock.textContent = `${result}`;
            resultContainer.appendChild(resultBlock);
        });
    }
    else
    {
        message(resultContainer, 'Не знайдено.', 'center', '#666');
    }
}

/**
 * Додавання нового документа
 */
async function addDocumentHandler() {
    const docId = document.getElementById('docId').value.trim();
    const docContent = document.getElementById('docContent').value.trim();

    if (!docId || !docContent)
    {
        alert('ID документу та його вміст не може бути порожнім.');
        return;
    }

    const responseText = await sendRequest(`ADD ${docId} ${docContent}`);

    message(document.getElementById('resultContent'), responseText || 'Помилка');
    clearInputs(['docId', 'docContent']);

    await updateDocumentList();
}

/**
 * Видалення документа
 */
async function deleteDocumentHandler() {
    const docId = document.getElementById('deleteDoc').value;

    if (!docId)
    {
        alert('Оберіть документ, що потрібно видалити');
        return;
    }

    if (confirm(`Ви підтверджуєте видалення документу з ID: ${docId}?`))
    {
        const responseText = await sendRequest(`DELETE ${docId}`);
        message(document.getElementById('resultContent'), responseText || 'Помилка');

        await updateDocumentList();
    }
}

/**
 * Оновлення списку документів
 */
async function updateDocumentList() {
    const responseText = await sendRequest('LIST');
    const select = document.getElementById('deleteDoc');
    select.innerHTML = '';

    addOption(select, 'Оберіть документ');
    responseText.split('\n').filter(Boolean).forEach(docId => {
        const option = document.createElement('option');
        option.value = docId;
        option.textContent = docId;
        select.appendChild(option);
    });
}

/**
 * Переключення адмінки
 */
function toggleAdminMode() {
    const adminPanel = document.getElementById('adminPanel');
    const body = document.body;
    const toggleButton = document.getElementById('adminButton');
    const resultContainer = document.getElementById('resultContent');

    body.classList.toggle('dark-theme');
    const isAdminMode = adminPanel.style.display === 'none' || adminPanel.style.display === '';
    adminPanel.style.display = isAdminMode ? 'block' : 'none';
    toggleButton.textContent = isAdminMode ? 'Покинути Адмінку' : 'Адмінка';

    clearInputs(['searchTerm', 'docId', 'docContent']);
    resultContainer.innerHTML = 'Тут поки пусто.';

    if (isAdminMode) {
        updateDocumentList();
    }
}

/**
 * Відправлення запиту на сервер
 */
async function sendRequest(body) {
    try {
        const resp = await fetch(serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body
        });
        return resp.ok ? await resp.text() : `Error: ${resp.status}`;
    } catch (error) {
        console.error('Network Error:', error);
        return 'Помилка підключення';
    }
}

/**
 * Відображення повідомлення у контейнері
 */
function message(container, text, textAlign = 'left', color = '#000') {
    container.innerHTML = '';
    const message = document.createElement('div');
    message.textContent = text;
    message.style.textAlign = textAlign;
    message.style.color = color;
    container.appendChild(message);
}

/**
 * Додає опцію "за замовчуванням" до списку
 */
function addOption(select, text) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = text;
    option.disabled = true;
    option.selected = true;
    select.appendChild(option);
}

/**
 * Очищення значень полів вводу
 */
function clearInputs(inputIds) {
    inputIds.forEach(id => document.getElementById(id).value = '');
}

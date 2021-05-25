const render = (arr, DOM, selected) => {
    const html = arr.map ((user, idx) => {
        const item = `
            <li><a href = '#${idx}'>
                ${user.name}<a>
            </li>
            `
        if (selected === idx) {
            item + `<ul>
                ${Object.keys(user).map(u=> `
                    <li>
                        ${u}
                    </li>
                `).join('')}
            </ul>
            `
        }
        return item
    }).join('')

    DOM.innerHTML = html;

}

module.exports = { render }


// method 1 

const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{// write  window bcz we want  to call this in whole window
    insert.insertAdjacentHTML('beforeend', `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Key Code</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `);
})


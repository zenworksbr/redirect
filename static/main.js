const servers = {
        "ttt": {
                "name": "NotZenTown",
                "ip": "138.199.5.184",
                "port": 27015
        },
        "zm": {
                "name": "ZenbieMode",
                "ip": "187.22.179.237",
                "port": 27115 
        },
        "ze": {
                "name": "ZenEscape",
                "ip": "187.22.179.237",
                "port": 27015
        },
        "jb": {
                "name": "ZenBreak",
                "ip": "187.22.179.237",
                "port": 27050
        },
}

function fetchServerObj(param) {
        if (param == undefined) {
                return servers.ttt
        }
        return servers[param]
}

function generateConnectionString(server_obj) {
        let url = `steam://connect/${server_obj.ip}:${server_obj.port}`
        if (server_obj.password) {
                url += `/${server_obj.password}`
        }

        return url
}

function generateButtons() {
        const main = document.querySelector('main')

        for (const [id, server] of Object.entries(servers)) {
                const button = document.createElement("a")
                button.id = id
                button.target = "_self"
                button.href = generateConnectionString(server)
                button.innerHTML = server.name
                const span = document.createElement('span')
                button.appendChild(span)
                main.appendChild(button)
        }
}
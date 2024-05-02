const servers = {
        "ttt": {
                "name": "NotZenTown",
                "ip": "yang.zenworks.com.br",
                "port": 27015
        },
        "murder": {
                "name": "ZenAssassination",
                "ip": "yang.zenworks.com.br",
                "port": 27016
        },
        "ze": {
                "name": "ZenEscape",
                "ip": "yang.zenworks.com.br",
                "port": 27017
        },
        "zm": {
                "name": "ZenbieMode",
                "ip": "yang.zenworks.com.br",
                "port": 27018 
        },
        "jb": {
                "name": "ZenBreak",
                "ip": "yang.zenworks.com.br",
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
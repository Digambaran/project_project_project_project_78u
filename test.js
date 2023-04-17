const os = require('os')

const getLocalHosts = ()=>{
  const interfaces = os.networkInterfaces()

  const results = new Set([undefined,'0.0.0.0'])

  for(const _interface of Object.values(interfaces)){
    console.log(_interface)
  console.log ('.')
    for(const config of _interface){
      console.log(config)
      results.add(config.address)
    }
  }
}

getLocalHosts()

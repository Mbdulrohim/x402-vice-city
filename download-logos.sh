#!/bin/bash

# Download Facilitators (9 logos)
cd public/logos/facilitators

curl -o cdp.png "https://www.x402.org/logos/cdp.png"
curl -o corbits.png "https://www.x402.org/logos/corbits.png"
curl -o mogami.png "https://www.x402.org/logos/logo_mogami_vertical_small.png"
curl -o openx402.png "https://www.x402.org/logos/openx402.png"
curl -o payai.svg "https://www.x402.org/logos/payai.svg"
curl -o treasure.png "https://www.x402.org/logos/treasure.png"
curl -o worldfun.svg "https://www.x402.org/logos/worldfun.svg"
curl -o x402org.png "https://www.x402.org/logos/x402-logo.png"
curl -o x402rs.svg "https://www.x402.org/logos/x402-rs.svg"

cd ../services

# Download Services (21 logos)
curl -o aeon.png "https://www.x402.org/logos/aeon.png"
curl -o aimo.png "https://www.x402.org/logos/aimonetwork.png"
curl -o aisa.png "https://www.x402.org/logos/aisa.png"
curl -o aurracloud.png "https://www.x402.org/logos/aurracloud.png"
curl -o elsa.png "https://www.x402.org/logos/elsa-x402.png"
curl -o firecrawl.png "https://www.x402.org/logos/firecrawl.png"
curl -o gloria.png "https://www.x402.org/logos/gloria.png"
curl -o grove.png "https://www.x402.org/logos/grove-api-logo.png"
curl -o heurist-research.png "https://www.x402.org/logos/heurist-deep-research-icon.png"
curl -o imagine.png "https://www.x402.org/logos/imagine.png"
curl -o minifetch.svg "https://www.x402.org/logos/minifetch.svg"
curl -o neynar.png "https://www.x402.org/logos/neynar.png"
curl -o onchain.png "https://www.x402.org/logos/onchain.png"
curl -o otto.png "https://www.x402.org/logos/otto-ai.png"
curl -o pinata.png "https://www.x402.org/logos/pinata.png"
curl -o proofivy.png "https://www.x402.org/logos/proofivy.png"
curl -o questflow.png "https://www.x402.org/logos/questflow.png"
curl -o quicksilver.png "https://www.x402.org/logos/quicksilver.png"
curl -o snack-money.png "https://www.x402.org/logos/snackmoney.png"
curl -o tipmd.png "https://www.x402.org/logos/tipdotmd.png"
curl -o zyte.png "https://www.x402.org/logos/zyte-api-x402.png"

cd ../infrastructure

# Download Infrastructure (29 logos)
curl -o 0x402ai.png "https://www.x402.org/logos/0x402ai.png"
curl -o 1shot.png "https://www.x402.org/logos/1shot-api.png"
curl -o 402104.png "https://www.x402.org/logos/402104.png"
curl -o altlayer.png "https://www.x402.org/logos/AltLayer_logo.png"
curl -o cascade.png "https://www.x402.org/logos/cascade.png"
curl -o codenut.png "https://www.x402.org/logos/codenut.png"
curl -o dapplooker.png "https://www.x402.org/logos/dapplooker.png"
curl -o daydreams.png "https://www.x402.org/logos/router-logo.png"
curl -o faremeter.png "https://www.x402.org/logos/faremeter.png"
curl -o fluora.png "https://www.x402.org/logos/fluora.png"
curl -o fluxa.png "https://www.x402.org/logos/fluxa.png"
curl -o heurist-mesh.png "https://www.x402.org/logos/heurist-mesh.png"
curl -o latinum.png "https://www.x402.org/logos/latinum.png"
curl -o mcp-server.png "https://www.x402.org/logos/mcp-example.png"
curl -o mcpay.png "https://www.x402.org/logos/mcpay-logo.png"
curl -o meridian.png "https://www.x402.org/logos/meridian-logo.png"
curl -o meson.png "https://www.x402.org/logos/meson.png"
curl -o mogami-java.png "https://www.x402.org/logos/logo_mogami_vertical_small.png"
curl -o node-servers.png "https://www.x402.org/logos/node-servers.png"
curl -o proxy402.png "https://www.x402.org/logos/proxy402.png"
curl -o x402-secure.jpg "https://www.x402.org/logos/t54-x402-secure.jpg"
curl -o thirdweb.png "https://www.x402.org/logos/thirdweb-logo.png"
curl -o tokenmesa.png "https://www.x402.org/logos/tokenmesa-logo.png"
curl -o x402-kit.png "https://www.x402.org/logos/aimonetwork.png"
curl -o x402-market.svg "https://www.x402.org/logos/worldfun.svg"
curl -o x402list.png "https://www.x402.org/logos/x402list.png"
curl -o x402scan.png "https://www.x402.org/logos/x402scan.png"
curl -o x402station.png "https://www.x402.org/logos/x402station-logo.png"
curl -o zkstash.png "https://www.x402.org/logos/zkstash.png"

cd ../integrations

# Download Integrations (9 logos)
curl -o axios-fetch.png "https://www.x402.org/logos/axios-fetch-clients.png"
curl -o ekai.png "https://www.x402.org/logos/ekailabs.png"
curl -o genbase.png "https://www.x402.org/logos/genbase.png"
curl -o mogami-java-client.png "https://www.x402.org/logos/logo_mogami_vertical_small.png"
curl -o nuwa.png "https://www.x402.org/logos/nuwa-ai.png"
curl -o subnano.png "https://www.x402.org/logos/subnano.png"
curl -o thirdweb-client.png "https://www.x402.org/logos/thirdweb-logo.png"
curl -o ai-frens.png "https://www.x402.org/logos/aifrens.png"
curl -o tweazy.png "https://www.x402.org/logos/tweazy.png"

echo "✅ All logos downloaded!"

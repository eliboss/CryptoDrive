const data = {
    "contractName": "CryptoDrive",
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "user_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "filehash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "filename",
            "type": "string"
          }
        ],
        "name": "AddFileHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "string",
            "name": "user_id",
            "type": "string"
          }
        ],
        "name": "GetFilehash",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "filehash",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "filename",
                "type": "string"
              }
            ],
            "internalType": "struct CryptoDrive.File[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "user_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "pass_hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "public_keys",
            "type": "string"
          }
        ],
        "name": "SignUp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "string",
            "name": "user_id",
            "type": "string"
          }
        ],
        "name": "GetPassHash",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "string",
            "name": "user_id",
            "type": "string"
          }
        ],
        "name": "getPublicKey",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"user_id\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"filehash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"filename\",\"type\":\"string\"}],\"name\":\"AddFileHash\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"user_id\",\"type\":\"string\"}],\"name\":\"GetFilehash\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"filehash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"filename\",\"type\":\"string\"}],\"internalType\":\"struct CryptoDrive.File[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"user_id\",\"type\":\"string\"}],\"name\":\"GetPassHash\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"user_id\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"pass_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"public_keys\",\"type\":\"string\"}],\"name\":\"SignUp\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"user_id\",\"type\":\"string\"}],\"name\":\"getPublicKey\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/ASUS/Desktop/CryptoDrive/client/src/smart_contracts/contracts/CryptoDrive.sol\":\"CryptoDrive\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/ASUS/Desktop/CryptoDrive/client/src/smart_contracts/contracts/CryptoDrive.sol\":{\"keccak256\":\"0x90c09485c1499f6c52355ffe9cc7d655bd9a38256600a620001bee5b4157607f\",\"urls\":[\"bzz-raw://4df2baac196c670c64139f2a844105f5b4da9a2ae501b635573ebc2b1431fff0\",\"dweb:/ipfs/QmWqAzpqM9MKFY7UYzuJjz4dQWqJzhH4gCyC7nfCaFCeWA\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610af7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630bd141031461005c578063146f46d31461008c57806370758498146100a8578063bff90821146100c4578063cdaa3abf146100f4575b600080fd5b610076600480360361007191908101906106e9565b610124565b604051610083919061096a565b60405180910390f35b6100a660048036036100a1919081019061072a565b6101e4565b005b6100c260048036036100bd919081019061072a565b610284565b005b6100de60048036036100d991908101906106e9565b6102ef565b6040516100eb919061096a565b60405180910390f35b61010e600480360361010991908101906106e9565b6103af565b60405161011b9190610948565b60405180910390f35b60606001826040516101369190610931565b90815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101d85780601f106101ad576101008083540402835291602001916101d8565b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b50505050509050919050565b6000836040516101f49190610931565b908152602001604051809103902060405180604001604052808481526020018381525090806001815401808255809150509060018203906000526020600020906002020160009091929091909150600082015181600001908051906020019061025e929190610570565b50602082015181600101908051906020019061027b929190610570565b50505050505050565b816001846040516102959190610931565b908152602001604051809103902090805190602001906102b69291906105f0565b50806002846040516102c89190610931565b908152602001604051809103902090805190602001906102e99291906105f0565b50505050565b60606002826040516103019190610931565b90815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103a35780601f10610378576101008083540402835291602001916103a3565b820191906000526020600020905b81548152906001019060200180831161038657829003601f168201915b50505050509050919050565b60606000826040516103c19190610931565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156105655783829060005260206000209060020201604051806040016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ab5780601f10610480576101008083540402835291602001916104ab565b820191906000526020600020905b81548152906001019060200180831161048e57829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081525050815260200190600101906103ef565b505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105b157805160ff19168380011785556105df565b828001600101855582156105df579182015b828111156105de5782518255916020019190600101906105c3565b5b5090506105ec9190610670565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063157805160ff191683800117855561065f565b8280016001018555821561065f579182015b8281111561065e578251825591602001919060010190610643565b5b50905061066c9190610670565b5090565b61069291905b8082111561068e576000816000905550600101610676565b5090565b90565b600082601f8301126106a657600080fd5b81356106b96106b4826109b9565b61098c565b915080825260208301602083018583830111156106d557600080fd5b6106e0838284610a61565b50505092915050565b6000602082840312156106fb57600080fd5b600082013567ffffffffffffffff81111561071557600080fd5b61072184828501610695565b91505092915050565b60008060006060848603121561073f57600080fd5b600084013567ffffffffffffffff81111561075957600080fd5b61076586828701610695565b935050602084013567ffffffffffffffff81111561078257600080fd5b61078e86828701610695565b925050604084013567ffffffffffffffff8111156107ab57600080fd5b6107b786828701610695565b9150509250925092565b60006107cd83836108ed565b905092915050565b60006107e0826109f5565b6107ea8185610a23565b9350836020820285016107fc856109e5565b8060005b85811015610838578484038952815161081985826107c1565b945061082483610a16565b925060208a01995050600181019050610800565b50829750879550505050505092915050565b600061085582610a0b565b61085f8185610a45565b935061086f818560208601610a70565b61087881610aa3565b840191505092915050565b600061088e82610a0b565b6108988185610a56565b93506108a8818560208601610a70565b80840191505092915050565b60006108bf82610a00565b6108c98185610a34565b93506108d9818560208601610a70565b6108e281610aa3565b840191505092915050565b6000604083016000830151848203600086015261090a82826108b4565b9150506020830151848203602086015261092482826108b4565b9150508091505092915050565b600061093d8284610883565b915081905092915050565b6000602082019050818103600083015261096281846107d5565b905092915050565b60006020820190508181036000830152610984818461084a565b905092915050565b6000604051905081810181811067ffffffffffffffff821117156109af57600080fd5b8060405250919050565b600067ffffffffffffffff8211156109d057600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b82818337600083830152505050565b60005b83811015610a8e578082015181840152602081019050610a73565b83811115610a9d576000848401525b50505050565b6000601f19601f830116905091905056fea365627a7a72315820ad97f72d4c1ee7e058c98c5a0154a76d96ddac31029223c01bcaa6b9aa48142e6c6578706572696d656e74616cf564736f6c63430005100040",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630bd141031461005c578063146f46d31461008c57806370758498146100a8578063bff90821146100c4578063cdaa3abf146100f4575b600080fd5b610076600480360361007191908101906106e9565b610124565b604051610083919061096a565b60405180910390f35b6100a660048036036100a1919081019061072a565b6101e4565b005b6100c260048036036100bd919081019061072a565b610284565b005b6100de60048036036100d991908101906106e9565b6102ef565b6040516100eb919061096a565b60405180910390f35b61010e600480360361010991908101906106e9565b6103af565b60405161011b9190610948565b60405180910390f35b60606001826040516101369190610931565b90815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101d85780601f106101ad576101008083540402835291602001916101d8565b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b50505050509050919050565b6000836040516101f49190610931565b908152602001604051809103902060405180604001604052808481526020018381525090806001815401808255809150509060018203906000526020600020906002020160009091929091909150600082015181600001908051906020019061025e929190610570565b50602082015181600101908051906020019061027b929190610570565b50505050505050565b816001846040516102959190610931565b908152602001604051809103902090805190602001906102b69291906105f0565b50806002846040516102c89190610931565b908152602001604051809103902090805190602001906102e99291906105f0565b50505050565b60606002826040516103019190610931565b90815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103a35780601f10610378576101008083540402835291602001916103a3565b820191906000526020600020905b81548152906001019060200180831161038657829003601f168201915b50505050509050919050565b60606000826040516103c19190610931565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156105655783829060005260206000209060020201604051806040016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ab5780601f10610480576101008083540402835291602001916104ab565b820191906000526020600020905b81548152906001019060200180831161048e57829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081525050815260200190600101906103ef565b505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105b157805160ff19168380011785556105df565b828001600101855582156105df579182015b828111156105de5782518255916020019190600101906105c3565b5b5090506105ec9190610670565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063157805160ff191683800117855561065f565b8280016001018555821561065f579182015b8281111561065e578251825591602001919060010190610643565b5b50905061066c9190610670565b5090565b61069291905b8082111561068e576000816000905550600101610676565b5090565b90565b600082601f8301126106a657600080fd5b81356106b96106b4826109b9565b61098c565b915080825260208301602083018583830111156106d557600080fd5b6106e0838284610a61565b50505092915050565b6000602082840312156106fb57600080fd5b600082013567ffffffffffffffff81111561071557600080fd5b61072184828501610695565b91505092915050565b60008060006060848603121561073f57600080fd5b600084013567ffffffffffffffff81111561075957600080fd5b61076586828701610695565b935050602084013567ffffffffffffffff81111561078257600080fd5b61078e86828701610695565b925050604084013567ffffffffffffffff8111156107ab57600080fd5b6107b786828701610695565b9150509250925092565b60006107cd83836108ed565b905092915050565b60006107e0826109f5565b6107ea8185610a23565b9350836020820285016107fc856109e5565b8060005b85811015610838578484038952815161081985826107c1565b945061082483610a16565b925060208a01995050600181019050610800565b50829750879550505050505092915050565b600061085582610a0b565b61085f8185610a45565b935061086f818560208601610a70565b61087881610aa3565b840191505092915050565b600061088e82610a0b565b6108988185610a56565b93506108a8818560208601610a70565b80840191505092915050565b60006108bf82610a00565b6108c98185610a34565b93506108d9818560208601610a70565b6108e281610aa3565b840191505092915050565b6000604083016000830151848203600086015261090a82826108b4565b9150506020830151848203602086015261092482826108b4565b9150508091505092915050565b600061093d8284610883565b915081905092915050565b6000602082019050818103600083015261096281846107d5565b905092915050565b60006020820190508181036000830152610984818461084a565b905092915050565b6000604051905081810181811067ffffffffffffffff821117156109af57600080fd5b8060405250919050565b600067ffffffffffffffff8211156109d057600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b82818337600083830152505050565b60005b83811015610a8e578082015181840152602081019050610a73565b83811115610a9d576000848401525b50505050565b6000601f19601f830116905091905056fea365627a7a72315820ad97f72d4c1ee7e058c98c5a0154a76d96ddac31029223c01bcaa6b9aa48142e6c6578706572696d656e74616cf564736f6c63430005100040",
    "sourceMap": "96:1751:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;96:1751:0;;;;;;;",
    "deployedSourceMap": "96:1751:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;96:1751:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1494:122;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;669:165;;;;;;;;;;;;;;;;:::i;:::-;;1188:183;;;;;;;;;;;;;;;;:::i;:::-;;1701:125;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;946:124;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1494:122;1559:13;1591:8;1600:7;1591:17;;;;;;;;;;;;;;;;;;;;1584:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1494:122;;;:::o;669:165::-;777:10;788:7;777:19;;;;;;;;;;;;;;;;;;;;802:23;;;;;;;;807:8;802:23;;;;816:8;802:23;;;777:49;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;777:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;669:165;;;:::o;1188:183::-;1312:9;1294:8;1303:7;1294:17;;;;;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;1352:11;1332:10;1343:7;1332:19;;;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1188:183;;;:::o;1701:125::-;1767:13;1799:10;1810:7;1799:19;;;;;;;;;;;;;;;;;;;;1792:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1701:125;;;:::o;946:124::-;1011:13;1043:10;1054:7;1043:19;;;;;;;;;;;;;;;;;;;;1036:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;946:124;;;:::o;96:1751::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6:442:-1:-;;108:3;101:4;93:6;89:17;85:27;75:2;;126:1;123;116:12;75:2;163:6;150:20;185:65;200:49;242:6;200:49;;;185:65;;;176:74;;270:6;263:5;256:21;306:4;298:6;294:17;339:4;332:5;328:16;374:3;365:6;360:3;356:16;353:25;350:2;;;391:1;388;381:12;350:2;401:41;435:6;430:3;425;401:41;;;68:380;;;;;;;;456:347;;570:2;558:9;549:7;545:23;541:32;538:2;;;586:1;583;576:12;538:2;649:1;638:9;634:17;621:31;672:18;664:6;661:30;658:2;;;704:1;701;694:12;658:2;724:63;779:7;770:6;759:9;755:22;724:63;;;714:73;;600:193;532:271;;;;;810:809;;;;978:2;966:9;957:7;953:23;949:32;946:2;;;994:1;991;984:12;946:2;1057:1;1046:9;1042:17;1029:31;1080:18;1072:6;1069:30;1066:2;;;1112:1;1109;1102:12;1066:2;1132:63;1187:7;1178:6;1167:9;1163:22;1132:63;;;1122:73;;1008:193;1260:2;1249:9;1245:18;1232:32;1284:18;1276:6;1273:30;1270:2;;;1316:1;1313;1306:12;1270:2;1336:63;1391:7;1382:6;1371:9;1367:22;1336:63;;;1326:73;;1211:194;1464:2;1453:9;1449:18;1436:32;1488:18;1480:6;1477:30;1474:2;;;1520:1;1517;1510:12;1474:2;1540:63;1595:7;1586:6;1575:9;1571:22;1540:63;;;1530:73;;1415:194;940:679;;;;;;1627:217;;1758:80;1834:3;1826:6;1758:80;;;1744:94;;1737:107;;;;;1915:968;;2090:69;2153:5;2090:69;;;2172:101;2266:6;2261:3;2172:101;;;2165:108;;2296:3;2338:4;2330:6;2326:17;2321:3;2317:27;2365:71;2430:5;2365:71;;;2456:7;2484:1;2469:375;2494:6;2491:1;2488:13;2469:375;;;2556:9;2550:4;2546:20;2541:3;2534:33;2601:6;2595:13;2623:94;2712:4;2697:13;2623:94;;;2615:102;;2734:75;2802:6;2734:75;;;2724:85;;2832:4;2827:3;2823:14;2816:21;;2526:318;2516:1;2513;2509:9;2504:14;;2469:375;;;2473:14;2857:4;2850:11;;2874:3;2867:10;;2069:814;;;;;;;;;;2891:347;;3003:39;3036:5;3003:39;;;3054:71;3118:6;3113:3;3054:71;;;3047:78;;3130:52;3175:6;3170:3;3163:4;3156:5;3152:16;3130:52;;;3203:29;3225:6;3203:29;;;3198:3;3194:39;3187:46;;2983:255;;;;;;3245:360;;3375:39;3408:5;3375:39;;;3426:89;3508:6;3503:3;3426:89;;;3419:96;;3520:52;3565:6;3560:3;3553:4;3546:5;3542:16;3520:52;;;3593:6;3588:3;3584:16;3577:23;;3355:250;;;;;;3612:319;;3710:35;3739:5;3710:35;;;3757:61;3811:6;3806:3;3757:61;;;3750:68;;3823:52;3868:6;3863:3;3856:4;3849:5;3845:16;3823:52;;;3896:29;3918:6;3896:29;;;3891:3;3887:39;3880:46;;3690:241;;;;;;3995:621;;4120:4;4115:3;4111:14;4207:4;4200:5;4196:16;4190:23;4259:3;4253:4;4249:14;4242:4;4237:3;4233:14;4226:38;4279:69;4343:4;4329:12;4279:69;;;4271:77;;4140:220;4437:4;4430:5;4426:16;4420:23;4489:3;4483:4;4479:14;4472:4;4467:3;4463:14;4456:38;4509:69;4573:4;4559:12;4509:69;;;4501:77;;4370:220;4607:4;4600:11;;4093:523;;;;;;4623:266;;4769:95;4860:3;4851:6;4769:95;;;4762:102;;4881:3;4874:10;;4750:139;;;;;4896:421;;5094:2;5083:9;5079:18;5071:26;;5144:9;5138:4;5134:20;5130:1;5119:9;5115:17;5108:47;5169:138;5302:4;5293:6;5169:138;;;5161:146;;5065:252;;;;;5324:301;;5462:2;5451:9;5447:18;5439:26;;5512:9;5506:4;5502:20;5498:1;5487:9;5483:17;5476:47;5537:78;5610:4;5601:6;5537:78;;;5529:86;;5433:192;;;;;5632:256;;5694:2;5688:9;5678:19;;5732:4;5724:6;5720:17;5831:6;5819:10;5816:22;5795:18;5783:10;5780:34;5777:62;5774:2;;;5852:1;5849;5842:12;5774:2;5872:10;5868:2;5861:22;5672:216;;;;;5895:322;;6039:18;6031:6;6028:30;6025:2;;;6071:1;6068;6061:12;6025:2;6138:4;6134:9;6127:4;6119:6;6115:17;6111:33;6103:41;;6202:4;6196;6192:15;6184:23;;5962:255;;;;6224:166;;6325:3;6317:11;;6363:4;6358:3;6354:14;6346:22;;6311:79;;;;6397:152;;6521:5;6515:12;6505:22;;6486:63;;;;6556:118;;6646:5;6640:12;6630:22;;6611:63;;;;6681:122;;6775:5;6769:12;6759:22;;6740:63;;;;6810:123;;6923:4;6918:3;6914:14;6906:22;;6900:33;;;;6941:193;;7086:6;7081:3;7074:19;7123:4;7118:3;7114:14;7099:29;;7067:67;;;;;7143:153;;7248:6;7243:3;7236:19;7285:4;7280:3;7276:14;7261:29;;7229:67;;;;;7305:163;;7420:6;7415:3;7408:19;7457:4;7452:3;7448:14;7433:29;;7401:67;;;;;7477:145;;7613:3;7598:18;;7591:31;;;;;7631:145;7712:6;7707:3;7702;7689:30;7768:1;7759:6;7754:3;7750:16;7743:27;7682:94;;;;7785:268;7850:1;7857:101;7871:6;7868:1;7865:13;7857:101;;;7947:1;7942:3;7938:11;7932:18;7928:1;7923:3;7919:11;7912:39;7893:2;7890:1;7886:10;7881:15;;7857:101;;;7973:6;7970:1;7967:13;7964:2;;;8038:1;8029:6;8024:3;8020:16;8013:27;7964:2;7834:219;;;;;8061:97;;8149:2;8145:7;8140:2;8133:5;8129:14;8125:28;8115:38;;8109:49;;;",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity >0.5.11;\r\npragma experimental ABIEncoderV2;\r\n\r\ncontract CryptoDrive{\r\n    // Structure for storing the filehash,filename as File \r\n    \r\n    struct File{\r\n        string filehash;\r\n        string filename;\r\n    }\r\n    \r\n    // Mapping for Storing user id as string and File Structure array as value\r\n    // Mapping is private\r\n    \r\n    mapping(string=>File[]) private FileHashes;\r\n    mapping(string=>string) private PassHash;\r\n    mapping(string=>string) private PublicKeys;\r\n    \r\n    // Function AddFileHash which takes user id , filehash , filename\r\n    // It is pushes the structure in Filehash Mapping\r\n    \r\n    function AddFileHash(string memory user_id,string memory filehash,string memory filename) public {\r\n        FileHashes[user_id].push(File(filehash,filename));\r\n    }\r\n    \r\n    // Function GetFilehash which takes the user id \r\n    // It will return the struct array\r\n    \r\n    function GetFilehash(string memory user_id) public view returns (File[] memory){\r\n        return FileHashes[user_id];\r\n    }\r\n    \r\n    // Funtion to Save the user id , pass hash, public keys in the different mappings while SignUp\r\n    \r\n    function SignUp(string memory user_id,string memory pass_hash,string memory public_keys) public{\r\n        PassHash[user_id]=pass_hash;\r\n        PublicKeys[user_id]=public_keys;\r\n    }\r\n    \r\n    // Function to GetPassHash which takes user id as input and returns PassHash which is saved earlier\r\n    \r\n    function GetPassHash(string memory user_id) public view returns (string memory){\r\n        return PassHash[user_id];\r\n    }\r\n    \r\n    // Function to get public keys for a particular input user id\r\n    \r\n    function getPublicKey(string memory user_id) public view returns (string memory){\r\n        return PublicKeys[user_id];\r\n    }\r\n    \r\n    \r\n    \r\n}\r\n\r\n",
    "sourcePath": "C:/Users/ASUS/Desktop/CryptoDrive/client/src/smart_contracts/contracts/CryptoDrive.sol",
    "ast": {
      "absolutePath": "/C/Users/ASUS/Desktop/CryptoDrive/client/src/smart_contracts/contracts/CryptoDrive.sol",
      "exportedSymbols": {
        "CryptoDrive": [
          100
        ]
      },
      "id": 101,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">",
            "0.5",
            ".11"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:24:0"
        },
        {
          "id": 2,
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ],
          "nodeType": "PragmaDirective",
          "src": "59:33:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 100,
          "linearizedBaseContracts": [
            100
          ],
          "name": "CryptoDrive",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "CryptoDrive.File",
              "id": 7,
              "members": [
                {
                  "constant": false,
                  "id": 4,
                  "name": "filehash",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "212:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6,
                  "name": "filename",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "238:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "File",
              "nodeType": "StructDefinition",
              "scope": 100,
              "src": "190:71:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 12,
              "name": "FileHashes",
              "nodeType": "VariableDeclaration",
              "scope": 100,
              "src": "386:42:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_struct$_File_$7_storage_$dyn_storage_$",
                "typeString": "mapping(string => struct CryptoDrive.File[])"
              },
              "typeName": {
                "id": 11,
                "keyType": {
                  "id": 8,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "394:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "nodeType": "Mapping",
                "src": "386:23:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_struct$_File_$7_storage_$dyn_storage_$",
                  "typeString": "mapping(string => struct CryptoDrive.File[])"
                },
                "valueType": {
                  "baseType": {
                    "contractScope": null,
                    "id": 9,
                    "name": "File",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 7,
                    "src": "402:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_File_$7_storage_ptr",
                      "typeString": "struct CryptoDrive.File"
                    }
                  },
                  "id": 10,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "402:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_File_$7_storage_$dyn_storage_ptr",
                    "typeString": "struct CryptoDrive.File[]"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 16,
              "name": "PassHash",
              "nodeType": "VariableDeclaration",
              "scope": 100,
              "src": "435:40:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "typeName": {
                "id": 15,
                "keyType": {
                  "id": 13,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "443:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "nodeType": "Mapping",
                "src": "435:23:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                  "typeString": "mapping(string => string)"
                },
                "valueType": {
                  "id": 14,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "451:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 20,
              "name": "PublicKeys",
              "nodeType": "VariableDeclaration",
              "scope": 100,
              "src": "482:42:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "typeName": {
                "id": 19,
                "keyType": {
                  "id": 17,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "490:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "nodeType": "Mapping",
                "src": "482:23:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                  "typeString": "mapping(string => string)"
                },
                "valueType": {
                  "id": 18,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "498:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 39,
                "nodeType": "Block",
                "src": "766:68:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 34,
                              "name": "filehash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "807:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 35,
                              "name": "filename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "816:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 33,
                            "name": "File",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "802:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_File_$7_storage_ptr_$",
                              "typeString": "type(struct CryptoDrive.File storage pointer)"
                            }
                          },
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "802:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_File_$7_memory",
                            "typeString": "struct CryptoDrive.File memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_File_$7_memory",
                            "typeString": "struct CryptoDrive.File memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 29,
                            "name": "FileHashes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "777:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_struct$_File_$7_storage_$dyn_storage_$",
                              "typeString": "mapping(string memory => struct CryptoDrive.File storage ref[] storage ref)"
                            }
                          },
                          "id": 31,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 30,
                            "name": "user_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "788:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "777:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_File_$7_storage_$dyn_storage",
                            "typeString": "struct CryptoDrive.File storage ref[] storage ref"
                          }
                        },
                        "id": 32,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "777:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_File_$7_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct CryptoDrive.File storage ref) returns (uint256)"
                        }
                      },
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "777:49:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 38,
                    "nodeType": "ExpressionStatement",
                    "src": "777:49:0"
                  }
                ]
              },
              "documentation": null,
              "id": 40,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "AddFileHash",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 27,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 22,
                    "name": "user_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 40,
                    "src": "690:21:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 21,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "690:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 24,
                    "name": "filehash",
                    "nodeType": "VariableDeclaration",
                    "scope": 40,
                    "src": "712:22:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 23,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "712:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 26,
                    "name": "filename",
                    "nodeType": "VariableDeclaration",
                    "scope": 40,
                    "src": "735:22:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 25,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "735:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "689:69:0"
              },
              "returnParameters": {
                "id": 28,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "766:0:0"
              },
              "scope": 100,
              "src": "669:165:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 52,
                "nodeType": "Block",
                "src": "1025:45:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 48,
                        "name": "FileHashes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "1043:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_struct$_File_$7_storage_$dyn_storage_$",
                          "typeString": "mapping(string memory => struct CryptoDrive.File storage ref[] storage ref)"
                        }
                      },
                      "id": 50,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 49,
                        "name": "user_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "1054:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1043:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_File_$7_storage_$dyn_storage",
                        "typeString": "struct CryptoDrive.File storage ref[] storage ref"
                      }
                    },
                    "functionReturnParameters": 47,
                    "id": 51,
                    "nodeType": "Return",
                    "src": "1036:26:0"
                  }
                ]
              },
              "documentation": null,
              "id": 53,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "GetFilehash",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 43,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 42,
                    "name": "user_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 53,
                    "src": "967:21:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 41,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "967:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "966:23:0"
              },
              "returnParameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 46,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 53,
                    "src": "1011:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_File_$7_memory_$dyn_memory_ptr",
                      "typeString": "struct CryptoDrive.File[]"
                    },
                    "typeName": {
                      "baseType": {
                        "contractScope": null,
                        "id": 44,
                        "name": "File",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7,
                        "src": "1011:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_File_$7_storage_ptr",
                          "typeString": "struct CryptoDrive.File"
                        }
                      },
                      "id": 45,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "1011:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_File_$7_storage_$dyn_storage_ptr",
                        "typeString": "struct CryptoDrive.File[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1010:15:0"
              },
              "scope": 100,
              "src": "946:124:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 74,
                "nodeType": "Block",
                "src": "1283:88:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "PassHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "1294:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                            "typeString": "mapping(string memory => string storage ref)"
                          }
                        },
                        "id": 64,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "user_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55,
                          "src": "1303:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1294:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "pass_hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "1312:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "1294:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 67,
                    "nodeType": "ExpressionStatement",
                    "src": "1294:27:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 72,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 68,
                          "name": "PublicKeys",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20,
                          "src": "1332:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                            "typeString": "mapping(string memory => string storage ref)"
                          }
                        },
                        "id": 70,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 69,
                          "name": "user_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55,
                          "src": "1343:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1332:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "public_keys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "1352:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "1332:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 73,
                    "nodeType": "ExpressionStatement",
                    "src": "1332:31:0"
                  }
                ]
              },
              "documentation": null,
              "id": 75,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "SignUp",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 60,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 55,
                    "name": "user_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 75,
                    "src": "1204:21:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 54,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1204:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 57,
                    "name": "pass_hash",
                    "nodeType": "VariableDeclaration",
                    "scope": 75,
                    "src": "1226:23:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 56,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1226:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 59,
                    "name": "public_keys",
                    "nodeType": "VariableDeclaration",
                    "scope": 75,
                    "src": "1250:25:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 58,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1250:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1203:73:0"
              },
              "returnParameters": {
                "id": 61,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1283:0:0"
              },
              "scope": 100,
              "src": "1188:183:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 86,
                "nodeType": "Block",
                "src": "1573:43:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "PassHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1591:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 84,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 83,
                        "name": "user_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77,
                        "src": "1600:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1591:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 81,
                    "id": 85,
                    "nodeType": "Return",
                    "src": "1584:24:0"
                  }
                ]
              },
              "documentation": null,
              "id": 87,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "GetPassHash",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 78,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 77,
                    "name": "user_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "1515:21:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 76,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1515:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1514:23:0"
              },
              "returnParameters": {
                "id": 81,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 80,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 87,
                    "src": "1559:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 79,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1559:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1558:15:0"
              },
              "scope": 100,
              "src": "1494:122:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 98,
                "nodeType": "Block",
                "src": "1781:45:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "PublicKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "1799:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 96,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 95,
                        "name": "user_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "1810:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1799:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 93,
                    "id": 97,
                    "nodeType": "Return",
                    "src": "1792:26:0"
                  }
                ]
              },
              "documentation": null,
              "id": 99,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getPublicKey",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 90,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 89,
                    "name": "user_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 99,
                    "src": "1723:21:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 88,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1723:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1722:23:0"
              },
              "returnParameters": {
                "id": 93,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 92,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 99,
                    "src": "1767:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 91,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1767:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1766:15:0"
              },
              "scope": 100,
              "src": "1701:125:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 101,
          "src": "96:1751:0"
        }
      ],
      "src": "33:1818:0"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/C/Users/ASUS/Desktop/CryptoDrive/client/src/smart_contracts/contracts/CryptoDrive.sol",
        "exportedSymbols": {
          "CryptoDrive": [
            100
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              ">",
              "0.5",
              ".11"
            ]
          },
          "id": 1,
          "name": "PragmaDirective",
          "src": "33:24:0"
        },
        {
          "attributes": {
            "literals": [
              "experimental",
              "ABIEncoderV2"
            ]
          },
          "id": 2,
          "name": "PragmaDirective",
          "src": "59:33:0"
        },
        {
          "attributes": {
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              100
            ],
            "name": "CryptoDrive",
            "scope": 101
          },
          "children": [
            {
              "attributes": {
                "canonicalName": "CryptoDrive.File",
                "name": "File",
                "scope": 100,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "filehash",
                    "scope": 7,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "string",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 3,
                      "name": "ElementaryTypeName",
                      "src": "212:6:0"
                    }
                  ],
                  "id": 4,
                  "name": "VariableDeclaration",
                  "src": "212:15:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "filename",
                    "scope": 7,
                    "stateVariable": false,
                    "storageLocation": "default",
                    "type": "string",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 5,
                      "name": "ElementaryTypeName",
                      "src": "238:6:0"
                    }
                  ],
                  "id": 6,
                  "name": "VariableDeclaration",
                  "src": "238:15:0"
                }
              ],
              "id": 7,
              "name": "StructDefinition",
              "src": "190:71:0"
            },
            {
              "attributes": {
                "constant": false,
                "name": "FileHashes",
                "scope": 100,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(string => struct CryptoDrive.File[])",
                "value": null,
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(string => struct CryptoDrive.File[])"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 8,
                      "name": "ElementaryTypeName",
                      "src": "394:6:0"
                    },
                    {
                      "attributes": {
                        "length": null,
                        "type": "struct CryptoDrive.File[]"
                      },
                      "children": [
                        {
                          "attributes": {
                            "contractScope": null,
                            "name": "File",
                            "referencedDeclaration": 7,
                            "type": "struct CryptoDrive.File"
                          },
                          "id": 9,
                          "name": "UserDefinedTypeName",
                          "src": "402:4:0"
                        }
                      ],
                      "id": 10,
                      "name": "ArrayTypeName",
                      "src": "402:6:0"
                    }
                  ],
                  "id": 11,
                  "name": "Mapping",
                  "src": "386:23:0"
                }
              ],
              "id": 12,
              "name": "VariableDeclaration",
              "src": "386:42:0"
            },
            {
              "attributes": {
                "constant": false,
                "name": "PassHash",
                "scope": 100,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(string => string)",
                "value": null,
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(string => string)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 13,
                      "name": "ElementaryTypeName",
                      "src": "443:6:0"
                    },
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 14,
                      "name": "ElementaryTypeName",
                      "src": "451:6:0"
                    }
                  ],
                  "id": 15,
                  "name": "Mapping",
                  "src": "435:23:0"
                }
              ],
              "id": 16,
              "name": "VariableDeclaration",
              "src": "435:40:0"
            },
            {
              "attributes": {
                "constant": false,
                "name": "PublicKeys",
                "scope": 100,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(string => string)",
                "value": null,
                "visibility": "private"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(string => string)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 17,
                      "name": "ElementaryTypeName",
                      "src": "490:6:0"
                    },
                    {
                      "attributes": {
                        "name": "string",
                        "type": "string"
                      },
                      "id": 18,
                      "name": "ElementaryTypeName",
                      "src": "498:6:0"
                    }
                  ],
                  "id": 19,
                  "name": "Mapping",
                  "src": "482:23:0"
                }
              ],
              "id": 20,
              "name": "VariableDeclaration",
              "src": "482:42:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "AddFileHash",
                "scope": 100,
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "user_id",
                        "scope": 40,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 21,
                          "name": "ElementaryTypeName",
                          "src": "690:6:0"
                        }
                      ],
                      "id": 22,
                      "name": "VariableDeclaration",
                      "src": "690:21:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "filehash",
                        "scope": 40,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 23,
                          "name": "ElementaryTypeName",
                          "src": "712:6:0"
                        }
                      ],
                      "id": 24,
                      "name": "VariableDeclaration",
                      "src": "712:22:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "filename",
                        "scope": 40,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 25,
                          "name": "ElementaryTypeName",
                          "src": "735:6:0"
                        }
                      ],
                      "id": 26,
                      "name": "VariableDeclaration",
                      "src": "735:22:0"
                    }
                  ],
                  "id": 27,
                  "name": "ParameterList",
                  "src": "689:69:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 28,
                  "name": "ParameterList",
                  "src": "766:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "type": "uint256",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_File_$7_memory",
                                    "typeString": "struct CryptoDrive.File memory"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "push",
                                "referencedDeclaration": null,
                                "type": "function (struct CryptoDrive.File storage ref) returns (uint256)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "struct CryptoDrive.File storage ref[] storage ref"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 12,
                                        "type": "mapping(string memory => struct CryptoDrive.File storage ref[] storage ref)",
                                        "value": "FileHashes"
                                      },
                                      "id": 29,
                                      "name": "Identifier",
                                      "src": "777:10:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 22,
                                        "type": "string memory",
                                        "value": "user_id"
                                      },
                                      "id": 30,
                                      "name": "Identifier",
                                      "src": "788:7:0"
                                    }
                                  ],
                                  "id": 31,
                                  "name": "IndexAccess",
                                  "src": "777:19:0"
                                }
                              ],
                              "id": 32,
                              "name": "MemberAccess",
                              "src": "777:24:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": true,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "struct CryptoDrive.File memory",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      },
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 7,
                                    "type": "type(struct CryptoDrive.File storage pointer)",
                                    "value": "File"
                                  },
                                  "id": 33,
                                  "name": "Identifier",
                                  "src": "802:4:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 24,
                                    "type": "string memory",
                                    "value": "filehash"
                                  },
                                  "id": 34,
                                  "name": "Identifier",
                                  "src": "807:8:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 26,
                                    "type": "string memory",
                                    "value": "filename"
                                  },
                                  "id": 35,
                                  "name": "Identifier",
                                  "src": "816:8:0"
                                }
                              ],
                              "id": 36,
                              "name": "FunctionCall",
                              "src": "802:23:0"
                            }
                          ],
                          "id": 37,
                          "name": "FunctionCall",
                          "src": "777:49:0"
                        }
                      ],
                      "id": 38,
                      "name": "ExpressionStatement",
                      "src": "777:49:0"
                    }
                  ],
                  "id": 39,
                  "name": "Block",
                  "src": "766:68:0"
                }
              ],
              "id": 40,
              "name": "FunctionDefinition",
              "src": "669:165:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "GetFilehash",
                "scope": 100,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "user_id",
                        "scope": 53,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 41,
                          "name": "ElementaryTypeName",
                          "src": "967:6:0"
                        }
                      ],
                      "id": 42,
                      "name": "VariableDeclaration",
                      "src": "967:21:0"
                    }
                  ],
                  "id": 43,
                  "name": "ParameterList",
                  "src": "966:23:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 53,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "struct CryptoDrive.File[]",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "length": null,
                            "type": "struct CryptoDrive.File[]"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "File",
                                "referencedDeclaration": 7,
                                "type": "struct CryptoDrive.File"
                              },
                              "id": 44,
                              "name": "UserDefinedTypeName",
                              "src": "1011:4:0"
                            }
                          ],
                          "id": 45,
                          "name": "ArrayTypeName",
                          "src": "1011:6:0"
                        }
                      ],
                      "id": 46,
                      "name": "VariableDeclaration",
                      "src": "1011:13:0"
                    }
                  ],
                  "id": 47,
                  "name": "ParameterList",
                  "src": "1010:15:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 47
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "struct CryptoDrive.File storage ref[] storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 12,
                                "type": "mapping(string memory => struct CryptoDrive.File storage ref[] storage ref)",
                                "value": "FileHashes"
                              },
                              "id": 48,
                              "name": "Identifier",
                              "src": "1043:10:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 42,
                                "type": "string memory",
                                "value": "user_id"
                              },
                              "id": 49,
                              "name": "Identifier",
                              "src": "1054:7:0"
                            }
                          ],
                          "id": 50,
                          "name": "IndexAccess",
                          "src": "1043:19:0"
                        }
                      ],
                      "id": 51,
                      "name": "Return",
                      "src": "1036:26:0"
                    }
                  ],
                  "id": 52,
                  "name": "Block",
                  "src": "1025:45:0"
                }
              ],
              "id": 53,
              "name": "FunctionDefinition",
              "src": "946:124:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "SignUp",
                "scope": 100,
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "user_id",
                        "scope": 75,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 54,
                          "name": "ElementaryTypeName",
                          "src": "1204:6:0"
                        }
                      ],
                      "id": 55,
                      "name": "VariableDeclaration",
                      "src": "1204:21:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "pass_hash",
                        "scope": 75,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 56,
                          "name": "ElementaryTypeName",
                          "src": "1226:6:0"
                        }
                      ],
                      "id": 57,
                      "name": "VariableDeclaration",
                      "src": "1226:23:0"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "public_keys",
                        "scope": 75,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 58,
                          "name": "ElementaryTypeName",
                          "src": "1250:6:0"
                        }
                      ],
                      "id": 59,
                      "name": "VariableDeclaration",
                      "src": "1250:25:0"
                    }
                  ],
                  "id": 60,
                  "name": "ParameterList",
                  "src": "1203:73:0"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 61,
                  "name": "ParameterList",
                  "src": "1283:0:0"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "string storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 16,
                                    "type": "mapping(string memory => string storage ref)",
                                    "value": "PassHash"
                                  },
                                  "id": 62,
                                  "name": "Identifier",
                                  "src": "1294:8:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 55,
                                    "type": "string memory",
                                    "value": "user_id"
                                  },
                                  "id": 63,
                                  "name": "Identifier",
                                  "src": "1303:7:0"
                                }
                              ],
                              "id": 64,
                              "name": "IndexAccess",
                              "src": "1294:17:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 57,
                                "type": "string memory",
                                "value": "pass_hash"
                              },
                              "id": 65,
                              "name": "Identifier",
                              "src": "1312:9:0"
                            }
                          ],
                          "id": 66,
                          "name": "Assignment",
                          "src": "1294:27:0"
                        }
                      ],
                      "id": 67,
                      "name": "ExpressionStatement",
                      "src": "1294:27:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "type": "string storage ref"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 20,
                                    "type": "mapping(string memory => string storage ref)",
                                    "value": "PublicKeys"
                                  },
                                  "id": 68,
                                  "name": "Identifier",
                                  "src": "1332:10:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 55,
                                    "type": "string memory",
                                    "value": "user_id"
                                  },
                                  "id": 69,
                                  "name": "Identifier",
                                  "src": "1343:7:0"
                                }
                              ],
                              "id": 70,
                              "name": "IndexAccess",
                              "src": "1332:19:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 59,
                                "type": "string memory",
                                "value": "public_keys"
                              },
                              "id": 71,
                              "name": "Identifier",
                              "src": "1352:11:0"
                            }
                          ],
                          "id": 72,
                          "name": "Assignment",
                          "src": "1332:31:0"
                        }
                      ],
                      "id": 73,
                      "name": "ExpressionStatement",
                      "src": "1332:31:0"
                    }
                  ],
                  "id": 74,
                  "name": "Block",
                  "src": "1283:88:0"
                }
              ],
              "id": 75,
              "name": "FunctionDefinition",
              "src": "1188:183:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "GetPassHash",
                "scope": 100,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "user_id",
                        "scope": 87,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 76,
                          "name": "ElementaryTypeName",
                          "src": "1515:6:0"
                        }
                      ],
                      "id": 77,
                      "name": "VariableDeclaration",
                      "src": "1515:21:0"
                    }
                  ],
                  "id": 78,
                  "name": "ParameterList",
                  "src": "1514:23:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 87,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 79,
                          "name": "ElementaryTypeName",
                          "src": "1559:6:0"
                        }
                      ],
                      "id": 80,
                      "name": "VariableDeclaration",
                      "src": "1559:13:0"
                    }
                  ],
                  "id": 81,
                  "name": "ParameterList",
                  "src": "1558:15:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 81
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 16,
                                "type": "mapping(string memory => string storage ref)",
                                "value": "PassHash"
                              },
                              "id": 82,
                              "name": "Identifier",
                              "src": "1591:8:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 77,
                                "type": "string memory",
                                "value": "user_id"
                              },
                              "id": 83,
                              "name": "Identifier",
                              "src": "1600:7:0"
                            }
                          ],
                          "id": 84,
                          "name": "IndexAccess",
                          "src": "1591:17:0"
                        }
                      ],
                      "id": 85,
                      "name": "Return",
                      "src": "1584:24:0"
                    }
                  ],
                  "id": 86,
                  "name": "Block",
                  "src": "1573:43:0"
                }
              ],
              "id": 87,
              "name": "FunctionDefinition",
              "src": "1494:122:0"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getPublicKey",
                "scope": 100,
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "user_id",
                        "scope": 99,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 88,
                          "name": "ElementaryTypeName",
                          "src": "1723:6:0"
                        }
                      ],
                      "id": 89,
                      "name": "VariableDeclaration",
                      "src": "1723:21:0"
                    }
                  ],
                  "id": 90,
                  "name": "ParameterList",
                  "src": "1722:23:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "scope": 99,
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "type": "string",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "string",
                            "type": "string"
                          },
                          "id": 91,
                          "name": "ElementaryTypeName",
                          "src": "1767:6:0"
                        }
                      ],
                      "id": 92,
                      "name": "VariableDeclaration",
                      "src": "1767:13:0"
                    }
                  ],
                  "id": 93,
                  "name": "ParameterList",
                  "src": "1766:15:0"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 93
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "string storage ref"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 20,
                                "type": "mapping(string memory => string storage ref)",
                                "value": "PublicKeys"
                              },
                              "id": 94,
                              "name": "Identifier",
                              "src": "1799:10:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 89,
                                "type": "string memory",
                                "value": "user_id"
                              },
                              "id": 95,
                              "name": "Identifier",
                              "src": "1810:7:0"
                            }
                          ],
                          "id": 96,
                          "name": "IndexAccess",
                          "src": "1799:19:0"
                        }
                      ],
                      "id": 97,
                      "name": "Return",
                      "src": "1792:26:0"
                    }
                  ],
                  "id": 98,
                  "name": "Block",
                  "src": "1781:45:0"
                }
              ],
              "id": 99,
              "name": "FunctionDefinition",
              "src": "1701:125:0"
            }
          ],
          "id": 100,
          "name": "ContractDefinition",
          "src": "96:1751:0"
        }
      ],
      "id": 101,
      "name": "SourceUnit",
      "src": "33:1818:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
    },
    "networks": {
      "4": {
        "events": {},
        "links": {},
        "address": "0x0ef3e8Fe9251068f73E93BEe1c1Dc9247c803d50",
        "transactionHash": "0xa28cd393e17a6797e6f01e8250e997ad37e54f1314bf9b097e13f978702660dd"
      },
      "5777": {
        "events": {},
        "links": {},
        "address": "0x94eEC37114592995751D836caF36dc9dd3EAeff0",
        "transactionHash": "0x18d41c7b73291a9b35bc7e6a5b0ea307e6e5fa9ccbcea4218eacdc2477ae4c6f"
      }
    },
    "schemaVersion": "3.3.4",
    "updatedAt": "2021-03-26T09:56:34.153Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }

module.exports=data;
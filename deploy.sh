#cd /root/
export name=$1
export path=$2
#path = $3
#payable = $4
CMD="unlock 123456 \n deploy_contract $name saku1 0 0 $path GXC false"
echo -e $CMD
echo -e $CMD |./programs/cli_wallet/cli_wallet --chain-id c2af30ef9340ff81fd61654295e98a1ff04b23189748f86727d0b26b40bb0ff4 -s ws://39.105.155.174:28090

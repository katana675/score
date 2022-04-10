function getValue(){
    var radioButton=["q1","q2","q3","q4","q5","q6","q7","q8"];
    var win=[1,3,1,5,1,1,1,1,];
    var mac=[5,1,3,1,1,1,1,1,];
    var winScore=0;
    var macScore=0;
    for(var i=0; i<radioButton.length; i++){
        var radios =document.getElementsByName(radioButton[i]);
        for(var j=0; j<radios.length; j++){
            if(radios[j].checked){
                var radioValue=radios[j].value;
                if(radioValue=="win"){
                    winScore=winScore+win[i];
                } else if (radioValue=="mac"){
                    macScore=macScore+mac[i];
                }
                break;
            }
        }
    }
    if(macScore > winScore){
        var hantei="Mac"
        var setumei="<p>プログラミングの開発環境としての優劣はありますが、iosアプリを作成する場合はMacでないと出来ません。</p><p>また、クリエーター界隈ではMacが使われることが多く、特にグラフィックデザインでは必要な機能やスペックが揃っているという点でMacを選ぶと間違いありません。</p><p>WindowsのPCやアプリケーションとの互換性が不安ですが、顧客や関係者にMacユーザーが多いのであれば問題ないでしょう</p>"
    } else {
        var hantei="Windows"
        var setumei="<p>Windowsならではの特徴はゲームができること。プレイするだけでなく、開発する上でもWindowsの方が有利です。</p><p>VBAはMacでも開発できますがおまけ程度のような使用感で、使える機能やインターフェースはWindows版が圧倒的に便利です。</p><p>クリエーター以外の現場はユーザーが多いWindowsを選択する方が仕事がしやすいでしょう。特に役所が用意するファイルやソフトはWindows専用の場合もあります。</p>"
    }
    document.getElementById("hantei").innerHTML="判定:"+hantei+"がおすすめです";
    document.getElementById("setumei").innerHTML=setumei;
}
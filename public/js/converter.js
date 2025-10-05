//　1｡関数定義
export function setupConverter() {
    // 2. DOM要素の取得
    const converterForm = document.querySelector('.converter-form');
    const converterInput = document.querySelector('.converter-input');
    const converterFrom = document.querySelector('.converter-from');
    const converterTo = document.querySelector('.converter-to');
    const converterResult = document.querySelector('.converter-result');
    console.log(converterForm, converterInput, converterFrom, converterTo, converterResult);

    // 3.単位データの定義
    const lengthUnit = [
        { name: "meter", base: 1, shortName: "m" },
        { name: "kilometer", base: 1000, shortName: "km" },
        { name: "centimeter", base: 0.01, shortName: "cm" },
        { name: "millimeter", base: 0.001, shortName: "mm" },
        { name: "inch", base: 0.0254, shortName: "in" },
        { name: "foot", base: 0.3048, shortName: "ft" },
        { name: "yard", base: 0.9144, shortName: "yd" },
        { name: "mile", base: 1609.344, shortName: "mi" },
    ];

    //4｡単位選択欄初期化
    lengthUnit.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.base;
     //   option.textContent = unit.shortName;
        option.textContent = unit.name;
     //      option.title = unit.name; // title属性に正式名称を設定  
        converterFrom.appendChild(option);
        converterTo.appendChild(option.cloneNode(true));
    });

    converterFrom.selectedIndex = 0; // 最初のoptionを選択 
    converterTo.selectedIndex = 1;   // 2番目のoptionを選択
    
    // 変数処理
    function converter() {
        const inputValue = parseFloat(converterInput.value);
        const fromUnit = converterFrom.value;
        const toUnit = converterTo.value;

        if (isNaN(inputValue)) {
            converterResult.textContent = 'Please enter a valid number.';
            return;
        }

        // 単位変換のロジック
        let result = inputValue * (fromUnit / toUnit);

        // 結果の表示
        const fromUnitName = converterFrom.options[converterFrom.selectedIndex].textContent;
        const toUnitName = converterTo.options[converterTo.selectedIndex].textContent;

        converterResult.textContent = `${inputValue} ${fromUnitName} = ${result.toFixed(3)} ${toUnitName}`;
        //3 kilometer = 1.864 mile
    }

    //初期表示時に一度計算結果を表示
    converter();

    // 5.イベントリスナーの設定
    converterForm.addEventListener('input', converter); // 入力値や選択が変わるたびにconverter関数を実行 

}

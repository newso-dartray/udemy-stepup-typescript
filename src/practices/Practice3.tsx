export const Practice3 = () => {

	const getTotalTotalFee = (num: number) => {
		const total = num * 1.1;
		return total;
	}

	const onClickPractice = () => {
		let total: number = 0;
		total = getTotalTotalFee(1000);
		console.log(total);
	};

	return (
		<div>
			<p>練習問題：返却値の型指定</p>
			<button onClick={onClickPractice}>練習問題3を実行</button>
		</div>
	)
}

import React, { useState } from 'react'

const ColorPicker = () => {
	const [selectedColor, setSelectedColor] = useState('#ffffff')

	const handleChangeColor = event => {
		setSelectedColor(event.target.value)
	}

	const handleGenerateRandom = () => {
		const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
		setSelectedColor(randomColor)
	}

	return (
		<div style={{ display: 'flex', gap: 4 }}>
			<div>
				<p>select color</p>
				<input
					name="colorInput"
					type="color"
					value={selectedColor}
					onChange={handleChangeColor}
					style={{
						width: '150px',
						height: '35px',
					}}
				/>
			</div>
				<button onClick={handleGenerateRandom}>GenerateRandomColor</button>
			<div
				style={{
					backgroundColor: selectedColor,
					width: '150px',
					height: '150px',
					border: 'rgba(0,0,0,0.20)',
				}}
				className="colorDisplay"
			></div>
		</div>
	)
}

export default ColorPicker

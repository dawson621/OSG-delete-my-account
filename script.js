body { 
  text-align: center; 

}

.heart {
	font-size: 150px;
	color: #e00;
	animation: beat .25s infinite alternate;
	transform-origin: center;
}

@keyframes beat{
	to { transform: scale(1.4); }
}

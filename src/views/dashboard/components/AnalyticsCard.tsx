import { hexToRgba } from '@/utils'
import { useECharts } from '@/hooks/web/useECharts'
import { Ref, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
	props: {
		color: {
			type: String,
			default: '#7367f0',
		},
	},
	setup(props) {
		const analyticsRef = ref<HTMLDivElement | null>(null)

		const setCharts = () => {
			const { setOptions, echarts } = useECharts(analyticsRef as Ref<HTMLDivElement>)
			setOptions({
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						label: {
							backgroundColor: props.color,
						},
					},
				},
				xAxis: {
					show: false,
					type: 'category',
					boundaryGap: ['0%', '0%'],
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					show: false,
					type: 'value',
				},
				grid: {
					left: -70,
					right: -30,
					bottom: 0,
					containLabel: true,
				},
				series: [
					{
						data: [140, 532, 1101, 264, 1255, 190, 1340],
						type: 'line',
						smooth: true,
						showSymbol: false,
						lineStyle: {
							width: 3,
							color: props.color,
							shadowColor: hexToRgba(props.color, 0.7),
							shadowBlur: 10,
						},
						areaStyle: {
							opacity: 0.6,
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: hexToRgba(props.color, 0.5),
								},
								{
									offset: 1,
									color: hexToRgba(props.color, 0),
								},
							]),
						},
					},
				],
			})
		}

		onMounted(() => setCharts())

		return () => (
			<div class="bg-white rounded shadow">
				1
				<div class="w-full h-40" ref={analyticsRef} />
			</div>
		)
	},
})

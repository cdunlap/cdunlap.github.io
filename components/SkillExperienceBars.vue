<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
  mounted() {
    const chartData = {
      labels: ["Professional", "Personal"],
      datasets: [
        {
          label: "Years",
          data: [
            this.skill.professional_experience,
            this.skill.personal_experience,
          ],
          backgroundColor: '#2374ab'
        },
      ],
    };
    this.renderChart(chartData);
  },
};
</script>
<template>
    <div class="row justify-content-between mb-3">
        <div v-for="(item,index) in week" :key="index" class="col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 mb-3">
            <div class="card">
                <div class="card-body rounded ">
                    <div class="row justify-content-center">
                        <div class="col-10 col-xxl-8">
                            <chart :labels="item.labels" :data="item.data" :dalaLabel="item.dataLabel"
                                   :color="item.color"/>
                        </div>
                        <div class="col-12">
                            <small class="float-start">{{ item.dataLabel }}</small>
                            <small class="float-end">{{ item.all }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 mt-2">
            <div class="card ">
                <div class="card-body rounded">
                    <div class="row justify-content-center">
                        <div class="col-10 col-xxl-11">
                            <chart :labels="monthIncome.labels" :data="monthIncome.data"
                                   :dalaLabel="monthIncome.dataLabel" :color="monthIncome.color"/>

                        </div>
                    </div>
                    <div class="col-12">
                        <small class="float-start">{{ monthIncome.dataLabel }}</small>
                        <small class="float-end">{{ monthIncome.all }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 mt-2">
            <div class="card ">
                <div class="card-body rounded">
                    <div class="row justify-content-center">
                        <div class="col-10 col-xxl-11">
                            <chart :labels="monthPureProfit.labels" :data="monthPureProfit.data"
                                   :dalaLabel="monthPureProfit.dataLabel" :color="monthPureProfit.color"/>

                        </div>
                    </div>
                    <div class="col-12">
                        <small class="float-start">{{ monthPureProfit.dataLabel }}</small>
                        <small class="float-end">{{ monthPureProfit.all }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 mt-4">
            <div class="card ">
                <div class="card-body rounded">
                    <div class="row justify-content-center">
                        <div class="col-10 col-xxl-11">
                            <chart :labels="yearIncome.labels" :data="yearIncome.data"
                                   :dalaLabel="yearIncome.dataLabel" :color="yearIncome.color"/>

                        </div>
                    </div>
                    <div class="col-12">
                        <small class="float-start">{{ yearIncome.dataLabel }}</small>
                        <small class="float-end">{{ yearIncome.all }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 mt-4">
            <div class="card ">
                <div class="card-body rounded">
                    <div class="row justify-content-center">
                        <div class="col-10 col-xxl-11">
                            <chart :labels="yearPureProfit.labels" :data="yearPureProfit.data"
                                   :dalaLabel="yearPureProfit.dataLabel" :color="yearPureProfit.color"/>

                        </div>
                    </div>
                    <div class="col-12">
                        <small class="float-start">{{ yearPureProfit.dataLabel }}</small>
                        <small class="float-end">{{ yearPureProfit.all }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Chart from "../../components/Chart";

export default {
    name: "DayReportCards",
    components: {Chart},
    data() {
        return {
            week: [

                {
                    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "امروز"],
                    data: [70, 70, 72, 72, 72, 72, 75],
                    dataLabel: "محصول",
                    color: "white",
                    all: 12.365
                },
                {
                    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "امروز"],
                    data: [70, 25, 110, 90, 5, 50, 70],
                    dataLabel: "فروش",
                    color: "white",
                    all: 12.365
                },
                {
                    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "امروز"],
                    data: [1200, 1750, 1900, 2000, 2050, 2100, 2145],
                    dataLabel: "بازدید",
                    color: "white",
                    all: 12.365
                },
                {
                    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "امروز"],
                    data: [345, 458, 847, 987, 990, 1000, 1500],
                    dataLabel: "کاربر",
                    color: "white",
                    all: 12.365
                },
            ],
            monthIncome: {
                labels: ["1401-02-01", "1401-02-02", "1401-02-03", "1401-02-04", "1401-02-05", "1401-02-06", "1401-02-07", "1401-02-08", "1401-02-09", "1401-02-10", "1401-02-11", "1401-02-12", "1401-02-13", "1401-02-14", "1401-02-15", "1401-02-16", "1401-02-17", "1401-02-18", "1401-02-19", "1401-02-20", "1401-02-21", "1401-02-22", "1401-02-23", "1401-02-24", "1401-02-25", "1401-02-26", "1401-02-27", "1401-02-28", "1401-02-29", "1401-02-30",],
                data: [
                    11000000, 13000000, 13000000, 14000000, 14000000, 15000000, 15000000, 15000000,
                    15000000, 15000000, 13000000, 16000000, 17000000, 18000000, 20000000, 21000000,
                    23000000, 19000000, 18000000, 20000000, 20000000, 23000000, 21000000, 22000000,
                    17000000, 16000000, 18000000, 20000000, 19000000, 12000000,
                ],
                dataLabel: "درامد ماه گذشته",
                color: "white",
                all: '600.000.000'
            },
            monthPureProfit: {
                labels: ["1401-02-01", "1401-02-02", "1401-02-03", "1401-02-04", "1401-02-05", "1401-02-06", "1401-02-07", "1401-02-08", "1401-02-09", "1401-02-10", "1401-02-11", "1401-02-12", "1401-02-13", "1401-02-14", "1401-02-15", "1401-02-16", "1401-02-17", "1401-02-18", "1401-02-19", "1401-02-20", "1401-02-21", "1401-02-22", "1401-02-23", "1401-02-24", "1401-02-25", "1401-02-26", "1401-02-27", "1401-02-28", "1401-02-29", "1401-02-30",],
                data: [
                    9000000, 11000000, 11000000, 12000000, 14000000, 15000000, 10000000, 10000000,
                    13000000, 14000000, 13000000, 15000000, 16000000, 15000000, 18000000, 11000000,
                    20000000, 19000000, 16000000, 17000000, 14000000, 22000000, 20000000, 20000000,
                    13000000, 15000000, 18000000, 13000000, 19000000, 12000000,
                ],
                dataLabel: "سود خالص ماه گذشته",
                color: "white",
                all: '400.000.000'
            },

            yearIncome: {
                labels: ["1400-05", "1400-06", "1400-07", "1400-08", "1400-09", "1400-10", "1400-11", "1400-12", "1401-01", "1401-02", "1401-03", "1401-04",],
                data: [
                    11000000, 13000000, 13000000, 14000000, 14000000, 15000000, 15000000, 15000000, 15000000, 15000000, 13000000, 16000000
                ],
                dataLabel: "درامد سال گذشته",
                color: "white",
                all: '1.600.000.000'

            },
            yearPureProfit: {
                labels: ["1400-05", "1400-06", "1400-07", "1400-08", "1400-09", "1400-10", "1400-11", "1400-12", "1401-01", "1401-02", "1401-03", "1401-04",],
                data: [
                    15000000, 16000000, 15000000, 18000000, 11000000, 20000000, 19000000, 16000000, 17000000, 14000000, 22000000, 20000000
                ],
                dataLabel: "سود خالص سال گذشته",
                color: "white",
                all: '900.000.000'
            },

        }
    }
}
</script>

<style scoped>
.card-body, h4 {
    background-color: black !important;
    color: white !important;
}
</style>

import Container from '@/Components/Container';
import SensorChart from '@/Components/SensorChart';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/sensor/data').then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <AuthenticatedLayout>

            <Head title="Dashboard" />

            <div className="py-12">
                <div className="grid grid-cols-2 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-8">

                    <Container>
                        <SensorChart title='Humidade' data={data.humidityReadings} color='oklch(62.3% 0.214 259.815)' />
                    </Container>

                    <Container>
                        <SensorChart title='Temperatura' data={data.temperatureReadings} color='oklch(57.7% 0.245 27.325)' />
                    </Container>

                    <Container>
                        <SensorChart title='Luz' data={data.lightReadings} color='oklch(76.9% 0.188 70.08)' />
                    </Container>

                    <Container>
                        <SensorChart title='Movimento' data={data.motionReadings} color='oklch(62.7% 0.265 303.9)' />
                    </Container>

                    <Container className="col-span-2">
                        <Table data={data.humidityReadings} />
                    </Container>

                    <Container className="col-span-2">
                        <Table data={data.temperatureReadings} />
                    </Container>

                    <Container className="col-span-2">
                        <Table data={data.lightReadings} />
                    </Container>

                    <Container className="col-span-2">
                        <Table data={data.motionReadings} />
                    </Container>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

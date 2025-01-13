import { SectionTitle } from '../../components'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Mapa = () => {
  return (
    <section className='mt-5'>
      <SectionTitle text='Búscanos' />
      <div className='w-full mt-6' style={{ height: '600px' }}>
        <MapContainer
          center={[20.482314, -100.961799]}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[20.482314, -100.961799]}>
            <Popup>
              Optica Tovar <br /> Te esperamos
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}

export default Mapa

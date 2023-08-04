import { useState } from 'react';
import { Description, StyledContainer, Title, OptionsContainer, OptionCard, ReserveButton } from '../../../components/Payment';

export default function Payment() {
  const [selectedModality, setSelectedModality] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  function modality(m) {
    setSelectedModality((prevModality) => (prevModality === m ? null : m));
  }

  function hotel(h) {
    setSelectedHotel((prevHotel) => (prevHotel === h ? null : h));
  }

  return (
    <>
      <StyledContainer>
        <Title>Ingresso e pagamento</Title>
        <Description>Primeiro, escolha sua modalidade de ingresso</Description>
        <OptionsContainer>

          <OptionCard
            onClick={() => modality('Presencial')}
            style={{ backgroundColor: selectedModality === 'Presencial' ? '#FFEED2' : '' }}>
            <div>Presencial<h2>R$ 250,00</h2></div>
          </OptionCard>

          <OptionCard
            onClick={() => modality('Online')}
            style={{ backgroundColor: selectedModality === 'Online' ? '#FFEED2' : '' }}>
            <div>Online<h2>R$ 100,00</h2></div>
          </OptionCard>

        </OptionsContainer>
        <Description>Ótimo! Agora escolha sua modalidade de hospedagem</Description>
        <OptionsContainer>

          <OptionCard
            onClick={() => hotel('semHotel')}
            style={{ backgroundColor: selectedHotel === 'semHotel' ? '#FFEED2' : '' }}>
            <div>Sem Hotel<h2>+ R$ 0,00</h2></div>
          </OptionCard>

          <OptionCard
            onClick={() => hotel('comHotel')}
            style={{ backgroundColor: selectedHotel === 'comHotel' ? '#FFEED2' : '' }}>
            <div>Com hotel<h2>+R$ 350,00</h2></div>
          </OptionCard>

        </OptionsContainer>
        <Description>Fechado! O total ficou em <span>R$ 600,00</span>. Agora é só confirmar:</Description>
        <ReserveButton
          onClick={() => console.log('clicando para reservar')}>
          RESERVAR INGRESSO</ReserveButton>

      </StyledContainer>
    </>
  );
}

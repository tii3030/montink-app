'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { IconSearch } from '@tabler/icons-react';
import { getCepParser } from '@/lib/parsers';

export default function CepSearchInput() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState<any | null>(null);
  const cepParser = getCepParser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    setCep(value);
  };

  const handleSearch = async () => {
    setLoading(true);
    const parsedCep = cepParser.parse(cep);
    if (parsedCep) {
      setError(null);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError('CEP não encontrado');
          setAddress(null);
        } else {
          setAddress(data);
        }
      } catch (err) {
        setError('Erro ao buscar CEP');
        setAddress(null);
      } finally {
        setLoading(false);
      }
    } else {
      setError('CEP inválido! XXXXX-XXX');
    }

    if (!cep) return;

    setLoading(false);
  };

  return (
    <div className='w-full space-y-2 xl:w-1/2'>
      <label className='text-sm font-medium'>Calcule o seu frete:</label>

      {/* INPUT CEP */}
      <div className='relative mt-3 w-full'>
        <Input
          maxLength={9}
          type='text'
          value={cep}
          onChange={handleChange}
          placeholder='Digite o CEP'
          className='h-10 w-full rounded-[0.5rem] border pr-12 pl-4 text-sm font-normal shadow-sm'
        />
        <Button
          variant='outline'
          className='absolute top-0 right-0 h-10 px-4'
          onClick={handleSearch}
          disabled={loading}
        >
          <IconSearch className='mr-2 h-4 w-4' />
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </div>

      {/* DISPLAY ERROR */}
      {error && <div className='mt-2 text-sm text-red-600'>{error}</div>}

      {/* DISPLAY DATA ADDRESS */}
      {address && (
        <div className='mt-4'>
          <p>
            <strong>Logradouro:</strong> {address.logradouro}
          </p>
          <p>
            <strong>Bairro:</strong> {address.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {address.localidade}
          </p>
          <p>
            <strong>Estado:</strong> {address.uf}
          </p>
        </div>
      )}
    </div>
  );
}

import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Preview } from '@react-email/preview'
import { Tailwind } from '@react-email/tailwind'
import { Body } from '@react-email/body'
import { Container } from '@react-email/container'
import { Heading } from '@react-email/heading'
import { Img } from '@react-email/img'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
import { BASE_URL } from '@lib/constants/general'

interface Props {
  name: string
  email: string
  message: string
}

export default function EmailToUser({ name, email, message }: Props) {
  const previewText = 'I will answer you as soon as possible.'

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                'monospace-black': '#090909',
                'monospace-white': '#F8F8F8',
                'monospace-dark-gray': '#0D0D0D',
                'monospace-light-gray': '#7A7A7A'
              }
            }
          }
        }}
      >
        <Body className='m-0 !bg-black py-14 font-geist-sans'>
          <Container className='mx-auto w-[480px] px-6'>
            <Heading
              as='h1'
              className='m-0 text-4xl font-bold text-monospace-white'
            >
              <strong>Hi {name}!</strong>
              <Img
                className='ml-3 inline'
                src={`${BASE_URL}/images/email/hand.png`}
                width='36'
                height='36'
                alt='Greeting'
              />
            </Heading>
            <Section className='mb-12 mt-10'>
              <Text className='mb-4 mt-0 text-monospace-white'>
                This is a confirmation that your message was sent successfully.
              </Text>
              <ul className='m-0 list-none border bg-monospace-white px-5 py-4 text-monospace-black'>
                <li className='m-0'>
                  <Text className='my-0'>
                    <u>Name:</u> {name}
                  </Text>
                </li>
                <li className='m-0'>
                  <Text className='my-0 [&>*]:text-monospace-black'>
                    <u>Email:</u> {email}
                  </Text>
                </li>
                <li className='m-0'>
                  <Text className='my-0'>
                    <u>Message:</u> {message}
                  </Text>
                </li>
              </ul>
              <Text className='mb-0 mt-5 text-monospace-white'>
                I will answer you as soon as possible.
              </Text>
              <Text className='m-0 text-monospace-white'>
                <i>Have a great day!</i>
              </Text>
            </Section>
            <Section className='m-0 text-monospace-light-gray'>
              <Img
                className='mb-3'
                src={`${BASE_URL}/images/email/monospace-logo.png`}
                width='36'
                height='36'
                alt='Monospace Logo'
              />
              <Text className='mb-0 mt-3 text-xs'>
                <Link
                  className='leading-5 text-monospace-light-gray underline'
                  href='https://monospace.ar'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  monospace.com
                </Link>
                , a creative studio <br />
                focused on web experiences.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

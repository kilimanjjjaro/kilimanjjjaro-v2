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
import { BASE_URL } from '@/lib/constants/general'

interface Props {
  name: string
  email: string
  message: string
}

export default function EmailToAdmin({ name, email, message }: Props) {
  const previewText = `${name} sent you a message`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                'kili-black': '#090909',
                'kili-white': '#F8F8F8',
                'kili-dark-gray': '#0D0D0D',
                'kili-light-gray': '#7A7A7A'
              }
            }
          }
        }}
      >
        <Body className='m-0 font-sans !bg-black py-14'>
          <Container className='w-[480px] mx-auto px-6'>
            <Heading as='h1' className='m-0 text-4xl font-bold text-kili-white'>
              <strong>Hi Gonzalo!</strong>
              <Img
                className='inline ml-3'
                src={`${BASE_URL}/images/email/hand.png`}
                width='36'
                height='36'
                alt='Greeting'
              />
            </Heading>
            <Section className='mt-10 mb-12'>
              <Text className='mt-0 mb-4 text-kili-white'>
                Someone just sent you a message through your website.
              </Text>
              <ul className='px-5 py-4 m-0 list-none border bg-kili-white text-kili-black'>
                <li className='m-0'>
                  <Text className='my-0'>
                    <u>Name:</u> {name}
                  </Text>
                </li>
                <li className='m-0'>
                  <Text className='my-0 [&>*]:text-kili-black'>
                    <u>Email:</u> {email}
                  </Text>
                </li>
                <li className='m-0'>
                  <Text className='my-0'>
                    <u>Message:</u> {message}
                  </Text>
                </li>
              </ul>
              <Text className='mt-5 mb-0 text-kili-white'>
                Don't forget to reply this as soon as possible.
              </Text>
              <Text className='m-0 text-kili-white'>
                <i>Have a great day!</i>
              </Text>
            </Section>
            <Section className='m-0 text-kili-light-gray'>
              <Img
                className='mb-3'
                src={`${BASE_URL}/images/email/monospace-logo.png`}
                width='36'
                height='36'
                alt='Monospace Logo'
              />
              <Text className='mt-3 mb-0 text-xs'>
                <Link
                  className='leading-5 underline text-kili-light-gray'
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

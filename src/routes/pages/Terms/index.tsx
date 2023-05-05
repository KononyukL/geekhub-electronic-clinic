import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Li, Ol, TermsBox, Ul } from 'routes/pages/Terms/styled';
import { offerAgreement, privacyPolicy, terms } from 'routes/pages/Terms/constants';
import { useParams } from 'react-router-dom';

const Terms = () => {
  const { termType } = useParams();

  const data = useMemo(() => {
    switch (termType) {
      case 'terms':
        return terms;
      case 'privacy':
        return privacyPolicy;
      case 'offer':
        return offerAgreement;
    }
  }, [termType]);

  return (
    <TermsBox>
      <Typography sx={{ textAlign: 'center', marginBottom: '50px' }} variant="h4">
        {data?.title}
      </Typography>
      <Ol>
        {data?.data.map((term, index) => (
          <Li key={index}>
            <Typography sx={{ fontSize: '20px' }}>{term.title}</Typography>
            {term.items && (
              <Ul>
                {term.items.map((item, index) => (
                  <Li key={index}>
                    <Typography variant="body1" component="p">
                      {item}
                    </Typography>
                  </Li>
                ))}
              </Ul>
            )}
          </Li>
        ))}
      </Ol>
      <Typography>{data?.finalPart}</Typography>
    </TermsBox>
  );
};

export default Terms;

package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Номера
 */
@Entity(name = "IISSerezhaНомера")
@Table(schema = "public", name = "Номера")
public class Nomera {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКомнаты")
    private Integer номеркомнаты;

    @Column(name = "ТипНомера")
    private String типномера;


    public Nomera() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКомнаты() {
      return номеркомнаты;
    }

    public void setНомерКомнаты(Integer номеркомнаты) {
      this.номеркомнаты = номеркомнаты;
    }

    public String getТипНомера() {
      return типномера;
    }

    public void setТипНомера(String типномера) {
      this.типномера = типномера;
    }


}